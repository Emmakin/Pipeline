import React from "react";
import PageNav from "../../components/PageNav";
import LabelAndInput from "../../components/LabelAndInput";
import MainButton from "../../components/MainButton";
import HeadText from "../../components/HeadText";

const EnterEmail = () => {
  return (
    <div className="p-4">
      <PageNav pageTitle="Forgot Password" />

      <HeadText>
        Enter your email and we’ll send you a link to reset your password.
      </HeadText>

      <LabelAndInput inputName="email" inputType="email" labelContent="Email" />

      <MainButton addStyles="mt-20">Continue</MainButton>
    </div>
  );
};

export default EnterEmail;
