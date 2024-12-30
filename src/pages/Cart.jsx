import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
// import ProductItem from "../components/ProductItem";

function Cart() {
  const { cartItems, currency, products, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  console.log(cartData);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 "
                key={index}
              >
                <div className="flex items-start gap-2">
                  <img
                    className="w-16  sm:w-20"
                    src={productData.image[0]}
                    alt="image"
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium ">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="bin-icon"
                />
              </div>
            );
          })
        ) : (
          <p className="font-medium text-[40px] pt-5">
            Add Items To your cart..
          </p>
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full  sm:w-[500px]">
          <CartTotal />
          <div className="w-full mt-10 pt-5 text-end ">
            {cartData.length > 0 && (
              <button
                to="/place-order"
                onClick={() => navigate("/place-order")}
                className="bg-black hover:bg-slate-700 transition-all duration-300  py-3  my-10 px-8  uppercase font-medium rounded-md text-white"
              >
                Proceed to checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
