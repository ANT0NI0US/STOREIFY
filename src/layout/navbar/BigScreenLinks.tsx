import { NavLink } from "react-router-dom";
import { arrLinks } from "@/utils/types";

interface BigScreenLinksProps {
  links: arrLinks[];
}

export default function BigScreenLinks({ links }: BigScreenLinksProps) {
  return (
    <div className="hidden h-full sm:flex sm:items-center sm:justify-between sm:gap-6 md:gap-8">
      {links?.map((item: arrLinks) => (
        <div
          key={item.text}
          className={`flexCenter h-full text-center text-lg font-semibold transition-all hover:font-extrabold`}
        >
          <NavLink
            className={(navClass) =>
              navClass.isActive
                ? "flexCenter text-orange-color-light dark:text-orange-color h-full w-full text-xl font-extrabold"
                : "flexCenter h-full w-full"
            }
            to={item?.path}
          >
            {item?.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
