import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiHeartLine } from "react-icons/ri";
import type { IconType } from "react-icons";
import { cartSliceState } from "@/utils/types";

interface allActionsProps {
  icon: IconType;
  text: string;
  href: string;
  value: number;
}

export default function NavbarActions() {
  const navigate = useNavigate();

  const { totalQuantity, totalFavoriteItemsQuantity } = useSelector(
    (state: cartSliceState) => state.cart,
  );

  const allActions: Array<allActionsProps> = [
    {
      icon: RiHeartLine,
      text: "Favorites",
      href: "/favorites",
      value: totalFavoriteItemsQuantity,
    },
    {
      icon: MdOutlineShoppingCart,
      text: "Cart",
      href: "/cart",
      value: totalQuantity,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-2.5">
      {allActions.map(({ text, href, icon: Icon, value }: allActionsProps) => (
        <div
          key={text}
          title={text}
          className="relative"
          onClick={() => navigate(`${href}`)}
        >
          <Icon className="hover:text-text-light-color/80 dark:hover:text-text-dark-color/80 cursor-pointer text-lg transition-all sm:text-xl" />
          {value > 0 && (
            <span className="flexCenter bg-text-light-color text-secondary-light-color dark:bg-text-dark-color dark:text-secondary-dark-color absolute top-[-11px] left-[11px] z-10 size-[18px] rounded-full p-0.5 text-[10px]">
              {value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
