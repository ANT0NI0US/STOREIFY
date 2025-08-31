import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "@/store/service/loginService";
import { useAppDispatch } from "@/hooks/useAppDispatch";

export default function SignInWithGoogle() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleGoogleLogin = () => {
    dispatch(signInWithGoogle())
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="text-text-light-color flex w-full items-center justify-center gap-1 rounded bg-white px-4 py-3 hover:bg-white/90"
      >
        <FcGoogle className="text-2xl" />
        <span>Sign in with Google</span>
      </button>

      <div className="flexCenter my-4 gap-2">
        <span className="bg-accent-light-color dark:bg-accent-dark-color h-px w-20 sm:w-40" />
        <span className="text-sm font-medium whitespace-nowrap">OR</span>
        <span className="bg-accent-light-color dark:bg-accent-dark-color h-px w-20 sm:w-40" />
      </div>
    </>
  );
}
