import { useState } from "react";
import BigScreenLinks from "./BigScreenLinks";
import NavbarActions from "./NavbarActions";
import ToggleSidebar from "./ToggleSidebar";
import SmallScreenLinks from "./SmallScreenLinks";
import Logo from "@/ui/Logo";
import Container from "@/ui/Container";
import ProfilePhoto from "./ProfilePhoto";
import { userLinks } from "./links";
import { loginState } from "@/utils/types";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  const { isAuthenticated } = useSelector((state: loginState) => state.login);
  const filteredLinks = userLinks.filter((link) => {
    if (link.path === "orders" && !isAuthenticated) return false;
    return true;
  });

  return (
    <>
      <div className="bg-primary-light-color text-text-light-color dark:bg-primary-dark-color dark:text-text-dark-color fixed top-0 z-30 h-[80px] w-full shadow-md">
        <Container Styles="flexBetween gap-6">
          {/* LOGO */}
          <Logo />

          {/* LINKS IN BIG SCREENS */}
          <BigScreenLinks links={filteredLinks} />
          <div className="flex h-full items-center gap-4.5 sm:gap-5">
            {/* ACTIONS */}
            <NavbarActions />
            {/* PROFILE PHOTO */}
            <ProfilePhoto />

            {/* TOGGLE SIDEBAR */}
            <ToggleSidebar toggleSidebar={toggleSidebar} />
          </div>
        </Container>
      </div>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks
        showSidebar={showSidebar}
        closeSidebar={closeSidebar}
        links={filteredLinks}
      />
    </>
  );
}
