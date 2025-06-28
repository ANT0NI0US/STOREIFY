import Logo from "@/ui/Logo";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="relative flex h-screen w-full flex-col gap-2 overflow-hidden bg-cover bg-center pb-10"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Fonline-shopping.webp?alt=media&token=3613355b-23d6-4a58-8e3a-d94e84c4bb92')`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-black/45 backdrop-blur-[4px] dark:bg-black/65" />

      <div className="z-10 flex justify-start px-4 pt-4">
        <div className="dark:bg-main-color/60 bg-light-color/60 rounded-md px-4 py-3">
          <Logo />
        </div>
      </div>

      <div className="z-10 flex flex-1 items-center justify-center px-4">
        <div className="scrollbar-hide bg-secondary-light-color dark:bg-main-color shadow-accent-light-color z-110 max-h-[calc(100vh-150px)] w-[95%] overflow-y-auto rounded-md p-4 shadow-2xl drop-shadow-md sm:w-[540px] sm:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
