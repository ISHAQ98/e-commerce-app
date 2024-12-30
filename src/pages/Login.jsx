import { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <hr className="border-none rounded-md h-[12.6px] w-14 mr-1 bg-gray-800 " />
        <p className="font-serif text-3xl"> {currentState}</p>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 rounded-md py-2 border border-gray-800 "
          required
          placeholder="Name"
        />
      )}
      <input
        type="email"
        className="w-full px-3 rounded-md py-2 border border-gray-800 "
        required
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 rounded-md py-2 border border-gray-800 "
        required
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px] ">
        <p>Forgot Your Password ?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer hover:text-green-600"
            onClick={() => setCurrentState("Sign Up")}
          >
            Crete Account
          </p>
        ) : (
          <p
            className="cursor-pointer hover:text-green-600 "
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded-md hover:bg-gray-700 transition-all duration-300">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
