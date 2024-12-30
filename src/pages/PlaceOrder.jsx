import { useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");

  const navigate = useNavigate();

  console.log(method);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]  ">
      {/* --------- Left Side ------------ */}
      <div className="flex flex-col  gap-4 w-full sm:max-w-[500px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border rounded-md border-gray-300 py-1.5 px-3.5 w-full "
            placeholder="First name"
            type="text"
          />
          <input
            className="border rounded-md  border-gray-300 py-1.5 px-3.5 w-full "
            placeholder="Last name"
            type="text"
          />
        </div>
        <input
          className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
          placeholder="Email Address"
          type="email"
        />
        <input
          className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
          placeholder=" Street "
          type="text"
        />
        <div className="flex gap-3">
          <input
            className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
            placeholder="City"
            type="text"
          />
          <input
            className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
            placeholder=" State "
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
            placeholder="Zipcode"
            type="number"
          />
          <input
            className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
            placeholder=" Country "
            type="text"
          />
        </div>
        <input
          className="border  rounded-md border-gray-300 py-1.5 px-3.5 w-full "
          placeholder="Phone"
          type="number"
        />
      </div>
      {/* ------ Right Side ----------- */}

      <div className="mt-8 min-w-80">
        <CartTotal />
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------- Payment method selection -------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3  rounded-md border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border ${
                  method === "stripe" ? "bg-green-500" : ""
                }  rounded-full`}
              ></p>
              <img src={assets.stripe_logo} alt="stripe-logo" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3  rounded-md border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border ${
                  method === "razorpay" ? "bg-green-500" : ""
                }  rounded-full`}
              ></p>
              <img src={assets.razorpay_logo} alt="razorpay-logo" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3  rounded-md border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 ${
                  method === "cod" ? "bg-green-500" : ""
                }  border rounded-full`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8 ">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black transition-all duration-300 hover:bg-slate-700 text-white py-3 px-16 text-sm rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
