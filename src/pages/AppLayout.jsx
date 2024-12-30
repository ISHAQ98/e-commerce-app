import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppLayout() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-px[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
