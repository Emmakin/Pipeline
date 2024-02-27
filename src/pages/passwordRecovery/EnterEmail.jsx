import React from "react";
import PageNav from "../../components/PageNav";
import LabelAndInput from "../../components/LabelAndInput";

const EnterEmail = () => {
  return (
    <div className="p-4">
      <PageNav pageTitle="Forgot Password" />

      <h1 className="text-textBlue text-2xl font-semibold tracking-tighter leading-[31px] mb-8">
        Enter your email and we’ll send you a link to reset your password.
      </h1>

      <LabelAndInput inputName="email" inputType="email" labelContent="Email" />
    </div>
  );
};

export default EnterEmail;
