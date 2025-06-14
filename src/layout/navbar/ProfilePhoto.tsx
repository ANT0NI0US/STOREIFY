import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.config";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import useAuth from "@/hooks/useAuth";

export default function ProfilePhoto() {
  const [toggleImageMenu, setToggleImageMenu] = useState<boolean>(false);
  const closeImageMenu = () => setToggleImageMenu(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useAuth();

  console.log(currentUser);
  const ref = useOutsideClick<HTMLDivElement>(() => closeImageMenu());

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout successfully");
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
        setToggleImageMenu(false);
        dispatch(cartActions.returnToInitialState());
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = () => {
    navigate("/login");
    setToggleImageMenu(false);
  };

  return (
    <div
      ref={ref}
      className="flexCenter relative"
      onClick={() => setToggleImageMenu((prev) => !prev)}
    >
      <motion.img
        whileTap={{ scale: 1.2 }}
        className="h-[40px] w-[40px] cursor-pointer rounded-full"
        src={
          (currentUser as { photoURL?: string })?.photoURL ||
          "https://i.ibb.co/rtVJ2Fs/user-icon.webp"
        }
        alt="user-icon"
      />

      {toggleImageMenu && (
        <div className="flexCenter border-light-color bg-secondary-color-light dark:border-main-color dark:bg-secondary-color absolute bottom-[-40px] left-[50%] z-50 translate-x-[-50%] rounded-md border p-[3px] text-center text-sm shadow-lg">
          {currentUser ? (
            <p
              className="text-primary-color-light hover:bg-primary-color-light/50 hover:text-light-color dark:text-primary-color dark:hover:bg-primary-color dark:hover:text-orange-color cursor-pointer rounded-md px-2 py-1 font-semibold transition-all"
              onClick={logout}
            >
              Logout
            </p>
          ) : (
            <p
              className="text-primary-color-light hover:bg-primary-color-light/50 hover:text-light-color dark:text-primary-color dark:hover:bg-primary-color dark:hover:text-orange-color cursor-pointer rounded-md px-2 py-1 font-semibold transition-all"
              onClick={handleLogin}
            >
              Login
            </p>
          )}
        </div>
      )}
    </div>
  );
}
