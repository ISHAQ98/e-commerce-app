import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 gap-1 font-medium">
      <Link to="/">
        <img
          src={assets.channel_logo}
          className="sm:mb-3 sm:w-25 w-24  rounded-full "
          alt="logo"
        />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm  text-gray-700">
        <NavLink to="/" className="flex flex-col uppercase items-center gap-1">
          <p>Home</p>
          <hr className=" hidden w-2/4 border-none h-[3px] bg-gray-700" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col uppercase items-center gap-1"
        >
          <p>Collection</p>
          <hr className=" hidden w-2/4 border-none h-[3px] bg-gray-700" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col uppercase items-center gap-1"
        >
          <p>About</p>
          <hr className=" hidden w-2/4 border-none h-[3px] bg-gray-700" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col uppercase items-center gap-1"
        >
          <p>contact</p>
          <hr className=" hidden w-2/4 border-none h-[3px] bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 ">
        {!showSearch && (
          <img
            onClick={() => setShowSearch(true)}
            className="w-6 cursor-pointer"
            src={assets.search_icon}
            alt="search-icon"
          />
        )}
        <div className="group relative ">
          <Link to={"/login"}>
            <img
              className="w-6 cursor-pointer"
              src={assets.profile_icon}
              alt="profile-icon"
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Portfolio</p>
              <Link to={"/orders"}>
                <p className="cursor-pointer hover:text-black">Orders</p>
              </Link>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link className="flex  items-center gap-1" to="/cart">
          <p className="  w-4 text-center leading-4 bg-red-600 text-slate-200 aspect-square rounded-full text-[9px] ">
            {getCartCount()}
          </p>
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart-icon" />
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {
        // Sidebar menu for small screens
        visible && (
          <div
            className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
              visible ? "w-full" : "w-0"
            }`}
          >
            <div
              onClick={() => setVisible(false)}
              className="flex flex-col text-gray-600"
            >
              <div
                // onClick={() => setVisible(false)}
                className="flex  cursor-pointer items-center gap-4 p-3"
              >
                <img
                  className="h-4 rotate-90"
                  src={assets.dropdown_icon}
                  alt="dropdown-icon"
                />
                <p>Back</p>
              </div>
              <NavLink
                // onClick={() => setVisible(false)}
                className="py-6 pl-6 border  hover:bg-slate-900 hover:text-white "
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                // onClick={() => setVisible(false)}
                className="py-6 pl-6 border  hover:bg-slate-900 hover:text-white  "
                to="/collection"
              >
                Collection
              </NavLink>
              <NavLink
                // onClick={() => setVisible(false)}
                className="py-6 pl-6 border  hover:bg-slate-900 hover:text-white "
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                // onClick={() => setVisible(false)}
                className="py-6 pl-6 border  hover:bg-slate-900 hover:text-white "
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
