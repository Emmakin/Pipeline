import React from "react";
import HeadText from "../components/HeadText";
import LabelAndInput from "../components/LabelAndInput";
import MainButton from "../components/MainButton";
import PageNav from "../components/PageNav";

function SignUp() {
  return (
    <div className="p-4">
      <PageNav pageTitle={"Sign Up"}/>
      <section >
        <HeadText addStyles={"mb-5"}>Welcome to Pipeline</HeadText>
        <span className="mb-5">complete the sign up to get started</span>
      </section>
      <form>
        <LabelAndInput labelContent={"Name"} inputName={"name"} inputType={"text"}/>
        <LabelAndInput labelContent={"Email"} inputName={"email"} inputType={"email"}/>
        <LabelAndInput labelContent={"Phone Number"} inputName={"phone number"} inputType={"number"}/>
        <LabelAndInput labelContent={"Password"} inputName={"password"} inputType={"password"}/>
      </form>
        <span>
          <input type="checkbox" className=" border-mainBlue shadow-md w-4 h-4
top-0.7rem left-0.7rem"/>
          <span>By signing up, you agree to the <a href="#" className="text-mainBlue">Terms of Service and Privacy Policy</a></span>
        <MainButton addStyles={"mt-10"}>Sign Up</MainButton>
        </span>
    </div>
  );
}

export default SignUp;
