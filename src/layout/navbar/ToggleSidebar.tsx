import { GiHamburgerMenu } from "react-icons/gi";

interface toggleMenuProps {
  toggleSidebar: () => void;
}

export default function ToggleSidebar({ toggleSidebar }: toggleMenuProps) {
  return (
    <div className="flexCenter sm:hidden">
      <button
        aria-label="Toggle-menu"
        title="Toggle menu"
        className="bg-secondary-color-light dark:bg-secondary-color hover:bg-orange-color-light hover:text-light-color dark:hover:bg-orange-color rounded-full p-2 transition-all"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
