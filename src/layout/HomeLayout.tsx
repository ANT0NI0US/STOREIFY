import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-primary-light-color dark:bg-main-color">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
