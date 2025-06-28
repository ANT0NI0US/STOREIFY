import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { arrLinks } from "@/utils/types";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface smallLinksProps {
  showSidebar: boolean;
  closeSidebar: () => void;
  links: arrLinks[];
}

export default function SmallScreenLinks({
  showSidebar,
  closeSidebar,
  links,
}: smallLinksProps) {
  const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div className="md:hidden">
        {/* OVERLAY */}
        <div className="fixed inset-0 z-100 h-full w-full bg-black/40 backdrop-blur-sm dark:bg-black/10" />

        {/* SIDEBAR */}
        <nav
          ref={ref}
          className="bg-primary-light-color dark:bg-primary-dark-color xs:w-[300px] fixed right-0 bottom-0 z-101 h-full w-full pb-16 shadow-md drop-shadow-xl"
        >
          {/* CLOSE SIDEBAR BUTTON*/}
          <div className="flex h-[80px] items-center justify-end px-2.5">
            <button
              aria-label="Close-icon"
              title="Close"
              onClick={closeSidebar}
            >
              <div className="flexCenter p-2">
                <IoCloseSharp size={20} />
              </div>
            </button>
          </div>

          {/* LINKS */}
          <div className="flex w-full flex-col">
            {links?.map((item: arrLinks, index: number) => (
              <div
                onClick={() => closeSidebar()}
                key={item.text}
                className={`${
                  index === 0 ? "border-t-2" : ""
                } flexCenter border-secondary-light-color hover:border-secondary-light-color hover:bg-secondary-light-color/40 dark:border-secondary-dark-color dark:hover:border-secondary-dark-color dark:hover:bg-secondary-dark-color/40 h-full w-full border-b-2 text-lg font-semibold transition-all hover:font-extrabold`}
              >
                <NavLink
                  className={(navClass) =>
                    navClass.isActive
                      ? "flexCenter border-accent-light-color bg-secondary-light-color/50 text-accent-light-color dark:border-accent-dark-color dark:bg-secondary-dark-color/50 dark:text-accent-dark-color h-full w-full border-r-8 px-7 py-3 text-xl font-extrabold"
                      : "flexCenter h-full w-full px-7 py-3"
                  }
                  to={item.path}
                >
                  {item.text}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>
    )
  );
}
