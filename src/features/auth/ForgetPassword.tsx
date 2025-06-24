import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import HeaderAuth from "./HeaderAuth";
import Button from "@/ui/Button.tsx";
import Input from "@/ui/Input.tsx";
import { loginState } from "@/utils/types";
import { EMAIL_REGEX } from "@/utils/constants.ts";
import { isOnlySpaces } from "@/utils/helpers.ts";
import { sendResetPasswordEmail } from "@/store/service/loginService.ts";
import { AppDispatch } from "@/store/index.ts";
import useHelmet from "@/hooks/useHelmet";

interface ForgetPasswordProps {
  email: string;
}

const initialState: ForgetPasswordProps = {
  email: "",
};

export default function ForgetPassword() {
  useHelmet("forget password");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: loginState) => state.login);

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
          ArialLabel="Reset Password"
          type="submit"
          Font="my-5"
        >
          Reset Password
        </Button>

        <div className="mx-auto text-center text-sm sm:text-base">
          <span className="text-primary-color-light dark:text-orange-color">
            Don't have an account?
          </span>
          <Link
            className="pl-1.5 underline transition-all hover:font-semibold"
            to="/sign-up"
          >
            Create an account
          </Link>
        </div>
      </form>
    </>
  );
}
