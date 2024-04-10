import React from "react";
import padlock from "../../assets/padlock.svg";
import HeadText from "../../components/HeadText";
import LabelAndInput from "../../components/LabelAndInput";
import MainButton from "../../components/MainButton";

const SetPassword = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center min-h-screen">
      <div className="h-fit w-full">
        <img src={padlock} alt="PASSWORD" className="mb-4" />
        <HeadText addStyles={"mb-4"}>Set your password</HeadText>
        <p className="text-texttBlack">
          Please create your new account password for your Pipeline app
        </p>
        <form noValidate className="mt-8 mb-8">
          <LabelAndInput
            labelContent={"Password"}
            inputName={"setPassword"}
            inputType={"password"}
          />

          <LabelAndInput
            labelContent={"Retype Password"}
            inputName={"retypePassword"}
            inputType={"password"}
          />
        </form>
        <MainButton>Continue</MainButton>
      </div>
    </div>
  );
};

export default SetPassword;
