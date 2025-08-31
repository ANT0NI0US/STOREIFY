import Links from "./Links";
import { Logo } from "@/ui";

export default function SiteDescription() {
  return (
    <div className="col-span-2 flex flex-col items-center gap-1 sm:items-start sm:gap-3">
      <Logo />
      <p className="xs:text-left text-center leading-[30px]">
        Explore a wide range of products, add to your cart, and enjoy a seamless
        shopping experience. Fast, secure checkout at your fingertips.
      </p>
      <Links />
    </div>
  );
}
