import React from "react";
import left from "../assets/back.svg";
import show from "../assets/show.svg";
import LabelAndInput from "../components/LabelAndInput";
import PageNav from "../components/PageNav";

const Login = () => {
  return (
    <div className="p-4">
      <PageNav pageTitle="Login" />

      <h1 className="text-textBlue text-2xl font-bold mb-3">Welcome</h1>
      <p className="text-sm mb-6">Login to see your pipelines.</p>

      <form noValidate className="mb-6">
        <LabelAndInput
          labelContent="Email"
          inputName="email"
          inputType="email"
        />

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
