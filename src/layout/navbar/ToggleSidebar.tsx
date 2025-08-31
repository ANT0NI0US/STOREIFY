import { GiHamburgerMenu } from "react-icons/gi";

interface ToggleMenuProps {
  toggleSidebar: () => void;
}

export default function ToggleSidebar({ toggleSidebar }: ToggleMenuProps) {
  return (
    <div className="flexCenter sm:hidden">
      <button
        aria-label="Toggle-menu"
        title="Toggle menu"
        className="bg-secondary-light-color dark:bg-secondary-dark-color hover:bg-accent-light-color dark:hover:bg-accent-dark-color rounded-full p-2 transition-all"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
