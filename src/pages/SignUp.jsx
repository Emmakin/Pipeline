import React from "react";
import HeadText from "../components/HeadText";
import LabelAndInput from "../components/LabelAndInput";

function SignUp() {
  return (
    <div>
      <section>
        <h3 className="font-inter textBlue text-2xl font-bold leading-9 text-left">Welcome to Pipeline</h3>
        <span>complete the sign up to get started</span>
      </section>
      <form>
        <LabelAndInput labelContent={"Name"} inputName={"name"} inputType={"text"}/>
        <LabelAndInput labelContent={"Email"} inputName={"email"} inputType={"email"}/>
        <LabelAndInput labelContent={"Phone Number"} inputName={"phone number"} inputType={"number"}/>
        <LabelAndInput labelContent={"Password"} inputName={"password"} inputType={"password"}/>
        <span>
          <input type="checkbox" className=" bg-sky-500 w-4 h-4
top-0.7rem left-0.7rem"/>
          <span>By signing up, you agree to the <a>Terms of Service and Privacy Policy</a></span>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
