import React from "react";
import left from "../assets/back.svg";
import show from "../assets/show.svg";

const Login = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-10 relative">
        <img src={left} alt="back" className="absolute" />
        <p className=" w-full text-center">Login</p>
      </div>

      <h1 className="text-textBlue text-2xl font-bold mb-3">Welcome</h1>
      <p className="text-sm mb-6">Login to see your pipelines.</p>

      <form noValidate className="mb-6">
        <div className="w-full h-fit flex flex-col rounded-full overflow-hidden mb-4">
          <label
            htmlFor="email"
            className="text-[10px] w-full bg-white block px-6 pt-2 text-textGray"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
          />
        </div>

        <div className="w-full h-fit flex rounded-full overflow-hidden bg-white pr-6">
          <div className="h-fit flex flex-col flex-grow">
            <label
              htmlFor="password"
              className="text-[10px] w-full bg-white block px-6 pt-2 text-textGray "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
            />
          </div>
          <img src={show} alt="Show" />
        </div>
      </form>

      <p className="text-mainBlue text-sm text-right">Forgot Password?</p>

      <div className="flex justify-between w-4/5 mx-auto mt-12 items-center">
        <button className="text-xs bg-mainBlueFade text-mainBlue px-6 py-1.5 rounded-full h-fit">
          Register
        </button>

        <button className="bg-mainBlue text-white px-10 py-2 rounded-full text-xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
