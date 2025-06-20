import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginState } from "@/utils/types";

export default function Logo() {
  const { isAdmin } = useSelector((state: loginState) => state.login);

  return (
    <Link
      to={isAdmin ? "/dashboard" : "/"}
      className="flex items-center justify-start"
    >
      <img
        loading="lazy"
        className="max-h-full w-[45px] max-w-[45px]"
        src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
        alt="Storeify-logo"
      />
      <h1 className="text-orange-color-light dark:text-orange-color text-xl font-extrabold">
        TOREIFY
      </h1>
    </Link>
  );
}
