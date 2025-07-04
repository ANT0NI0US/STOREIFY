import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import HeaderAuth from "@/components/auth/HeaderAuth";
import SignInWithGoogle from "@/components/auth/SignInWithGoogle";
import Button from "@/ui/Button.tsx";
import Input from "@/ui/Input.tsx";
import Checkbox from "@/ui/Checkbox";
import { loginState } from "@/utils/types";
import { EMAIL_REGEX } from "@/utils/constants.ts";
import { isOnlySpaces } from "@/utils/helpers.ts";
import { signInFireBase } from "@/store/service/loginService.ts";
import { AppDispatch } from "@/store/index.ts";
import useHelmet from "@/hooks/useHelmet";

interface loginFormProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

const initialState: loginFormProps = {
  email: "",
  password: "",
  rememberMe: false,
};

export default function Login() {
  useHelmet("login");
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

  const signIn = async (data: loginFormProps) => {
    await dispatch(signInFireBase(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <HeaderAuth
        title="Let's Get Started"
        desc="We Missed You! Please enter your details"
      />

      <SignInWithGoogle />

      <form onSubmit={handleSubmit(signIn)}>
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
            Icon={<MdOutlineMailOutline />}
          />

          <div className="flex flex-col gap-2">
            <Input
              label="Password"
              type="password"
              disabled={isLoading}
              register={register("password", {
                required: "This Field is required",
                validate: {
                  noOnlySpaces: (value) =>
                    !isOnlySpaces(value) || "It Mustn't contains only spaces",
                },
              })}
              error={errors?.password?.message}
            />
            <div className="flex items-center justify-between px-2 text-sm sm:text-base">
              <Checkbox
                id="rememberMe"
                label="Remember Me"
                disabled={isLoading}
                register={register("rememberMe")}
              />
              <Link to="/forget-password">Forget Password ?</Link>
            </div>
          </div>
        </div>
        <Button
          loading={isLoading}
          ArialLabel="Login"
          type="submit"
          Font="my-5"
        >
          Login
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
