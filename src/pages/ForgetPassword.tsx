import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import HeaderAuth from "@/components/auth/HeaderAuth";
import { Button, Input } from "@/ui";
import { EMAIL_REGEX } from "@/utils/constants.ts";
import { isOnlySpaces } from "@/utils/helpers.ts";
import { sendResetPasswordEmail } from "@/store/service/loginService.ts";
import useHelmet from "@/hooks/useHelmet";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

interface ForgetPasswordProps {
  email: string;
}

const initialState: ForgetPasswordProps = {
  email: "",
};

export default function ForgetPassword() {
  useHelmet("forget password");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const forgetPassword = async (data: ForgetPasswordProps) => {
    await dispatch(sendResetPasswordEmail(data.email))
      .unwrap()
      .then(() => {
        navigate("/login", { replace: true });
      });
  };

  return (
    <>
      <HeaderAuth
        title="Reset Password"
        desc="Just enter your email, and we’ll send you a secure link to reset your password.
Make sure to check your Spam or Promotions folder if it doesn’t arrive shortly!"
      />

      <form onSubmit={handleSubmit(forgetPassword)}>
        <div className="flex flex-col gap-6">
          <Input
            label="Email"
            disabled={isLoading}
            register={register("email", {
              required: "This Field is required",
              validate: {
                noOnlySpaces: (value) =>
                  !isOnlySpaces(value) || "It Mustn't contains only spaces",
              },
              pattern: {
                value: EMAIL_REGEX,
                message: "Enter a valid email.",
              },
            })}
            error={errors?.email?.message}
          />
        </div>
        <Button
          loading={isLoading}
          aria-label="Reset Password"
          title="Reset Password"
          type="submit"
          styles="my-5"
        >
          Reset Password
        </Button>

        <div className="mx-auto text-center text-sm sm:text-base">
          <span>Don't have an account?</span>
          <Link
            className="pl-1.5 font-medium underline transition-all hover:font-bold"
            to="/sign-up"
          >
            Create an account
          </Link>
        </div>
      </form>
    </>
  );
}
