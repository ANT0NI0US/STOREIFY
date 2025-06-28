import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginState } from "@/utils/types";

export default function Logo() {
  const { isAdmin } = useSelector((state: loginState) => state.login);

  return (
    <Link
      to={isAdmin ? "/dashboard" : "/"}
      className="flex items-center gap-0.5"
    >
      <img
        loading="lazy"
        className="max-h-full w-9 sm:w-11"
        src="https://i.ibb.co/ZS4YhxK/storeify-logo.webp"
        alt="Storeify-logo"
      />
      <h1 className="text-text-light-color dark:text-orange-color font-Merienda text-base font-extrabold sm:text-xl">
        TOREIFY
      </h1>
    </Link>
  );
}
