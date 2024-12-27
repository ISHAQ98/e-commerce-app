import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/assets";

function Collection() {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter on the side  {Option }*/}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((show) => !show)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt="icon"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/*  Category Filter */}

        <div
          className={`border border-gray-300 pl-5 p-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"kids"} /> kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 my-5 p-3 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
        {products.map((item, index) => (
          <ProductItem id={item._id} item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
