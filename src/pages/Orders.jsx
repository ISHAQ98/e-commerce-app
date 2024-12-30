import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { products, currency } = useContext(ShopContext);
  function handle(id) {
    console.log(id);
  }
  return (
    <div className="border-t pt-16 ">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>
      <div>
        {products.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex md:flex-row flex-col  md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.image[0]} alt="image" className="w-16 sm:20" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                  <p className="text-lg">
                    {currency} {item.price}
                  </p>
                  <p>Quantity : 1</p>
                  <p>Size : L</p>
                </div>
                <p>
                  Date: <span className="text-gray-400"> 30, 12,2024</span>
                </p>
              </div>
            </div>
            <div className="flex md:w-1/2 justify-between ">
              <div className="flex items-center gap-2 ">
                <p className="min-w-2 h-2 rounded-full bg-green-500 "> </p>
                <p className="text-sm md:text-base">Ready to ship </p>
              </div>
              <button
                onClick={() => handle(item._id)}
                className="border px-4 py-2  transition-all duration-300 hover:bg-slate-600 hover:text-white font-medium border-2 rounded-md"
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
