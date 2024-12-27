import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-px[9vw]">
      <Navbar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
