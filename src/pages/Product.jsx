import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  // const { _id: id, name, image: productImage, price } = productData;
  // console.log(productData, id);
  // console.log(cartItems);

  // function handleAddItem(id) {
  //   if (id === productData._id) {
  //     const newItem = {
  //       id,
  //       name,
  //       productImage,
  //       price,
  //     };
  //     setCartItems((cartItems) => [...cartItems, newItem]);
  //   }
  // }

  return productData ? (
    <div className="border-t-2  pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ----------- Product Data  --------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------- Product Images ------------ */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.6%] w-full ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="main-image" />
          </div>
        </div>
        {/* ------- Product Infos ----------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star-icon" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star-icon"
              className="w-3.5"
            />
            <p className="pl-2">(277)</p>
          </div>
          <p className="text-3xl mt-5 font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={` rounded-md bg-gray-100 py-2 px-4 border ${
                    item === size ? "border-red-400 border-2" : ""
                  } `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 rounded-md text-sm active:bg-gray-700 "
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy withing 7 days.</p>
          </div>
        </div>
      </div>
      {/* -------- description & Review Section ----------- */}

      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (277)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
          <p>
            Experience the perfect blend of style, functionality, and durability
            with our latest product. Crafted with premium materials and designed
            for everyday use, this item ensures top-notch performance and
            comfort. Whether you are at home, work, or on the go, it is the
            perfect companion for any occasion. Key features include advanced
            technology, lightweight design, and a sleek, modern finish that fits
            seamlessly into your lifestyle. Upgrade your experience today!
          </p>
          <p>
            Experience the perfect blend of style, functionality, and durability
            with our latest product. Crafted with premium materials and designed
            for everyday use, this item ensures top-notch performance and
            comfort. Whether at home, work, or on the go.
          </p>
        </div>
      </div>
      {/* --------- Display related products --------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
