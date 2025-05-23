import { GiHamburgerMenu } from "react-icons/gi";

interface toggleMenuProps {
  toggleSidebar: () => void;
}

export default function ToggleSidebar({ toggleSidebar }: toggleMenuProps) {
  return (
    <div className="flexCenter md:hidden">
      <button aria-label="Toggle-menu" onClick={toggleSidebar}>
        <div className="rounded-full bg-secondary-color-light p-2 dark:bg-secondary-color">
          <GiHamburgerMenu />
        </div>
      </button>
    </div>
  );
}
