import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Services from "./Services";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-primary-light-color dark:bg-main-color">
        <Outlet />
        <Services />
      </main>
      <Footer />
    </>
  );
}
