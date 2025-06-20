import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import ProfilePhoto from "./ProfilePhoto";
import { cartSliceState } from "@/utils/types";

interface allActionsProps {
  icon: ReactElement;
  text: string;
  href: string;
  value: number;
}
const iconStyle: string =
  "cursor-pointer transition-all hover:text-primary-color-light/80 dark:hover:text-primary-color/80";

export default function NavbarActions() {
  const navigate = useNavigate();

  const { totalQuantity, totalFavoriteItemsQuantity } = useSelector(
    (state: cartSliceState) => state.cart,
  );

  const allActions: Array<allActionsProps> = [
    {
      icon: <FaHeart className={iconStyle} size={20} />,
      text: "Favorites",
      href: "/favorites",
      value: totalFavoriteItemsQuantity,
    },
    {
      icon: <FaShoppingBag className={iconStyle} size={20} />,
      text: "Cart",
      href: "/cart",
      value: totalQuantity,
    },
  ];

  return (
    <div className="flexBetween gap-3 sm:gap-5">
      <div className="flexBetween gap-3">
        {allActions.map((action: allActionsProps) => (
          <div
            key={action.text}
            title={action.text}
            className="relative"
            onClick={() => navigate(`${action.href}`)}
          >
            {action.icon}
            {action.value > 0 && (
              <span className="flexCenter bg-orange-color-light text-light-color dark:bg-orange-color absolute top-[-11px] left-[11px] z-10 h-[20px] w-[20px] rounded-full p-1 text-xs">
                {action.value}
              </span>
            )}
          </div>
        ))}
      </div>

      <ProfilePhoto />
    </div>
  );
}
