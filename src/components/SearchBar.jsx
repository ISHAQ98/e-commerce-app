import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch, visible, setVisible } =
    useContext(ShopContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [setVisible, location]);
  return (
    <>
      {showSearch && visible && (
        <div className="border-t border-b bg-slate-50  text-center">
          <div className="inline-flex items-center  justify-center border border-slate-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm-1/2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className=" flex-1 text-sm rounded-md bg-inherit outline-none px-10 py-3 sm:flex-1 "
            />
            <img src={assets.search_icon} alt="icon" className=" pr-1 w-5" />
          </div>
          <img
            onClick={() => setShowSearch(false)}
            src={assets.cross_icon}
            alt="icon"
            className="inline  w-3 cursor-pointer"
          />
        </div>
      )}
    </>
  );
}

export default SearchBar;
