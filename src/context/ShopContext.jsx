import { createContext, useState } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  console.log(cartItems);

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];

        if (quantity > 0) {
          totalCount += quantity;
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemsInfo = products.find((product) => product._id === itemId);
      for (const item in cartItems[itemId]) {
        try {
          if (cartItems[itemId][item]) {
            totalAmount += itemsInfo.price * cartItems[itemId][item];
          }
        } catch (error) {
          `${error} !!!`;
        }
      }
    }
    return totalAmount;
  };

  //  OutDated code  same above  ==

  // const getCartCount = () => {
  //   let totalCount = 0;
  //   for (const items in cartItems) {
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[items][item] > 0) {
  //           totalCount += cartItems[items][item];
  //         }
  //       } catch (error) {
  //         toast.error(` ${error} Failed to add item to cart.`);
  //       }
  //     }
  //   }
  //   return totalCount;
  // };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    visible,
    setVisible,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Mark `children` as required
};
export default ShopContextProvider;
