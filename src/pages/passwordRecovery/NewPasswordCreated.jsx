import React from "react";
import success from "../../assets/success.svg";
import MainButton from "../../components/MainButton";

const NewPasswordCreated = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="h-fit text-center text-texttBlack">
        <img src={success} alt="Success" className="mx-auto mb-6" />
        <p className="text-xl mb-6">
          <span className="font-semibold">Hi!</span> John
        </p>
        <p className="mb-8">
          Your password has been reset, you can now log back into your Pipeline
          account
        </p>

        <MainButton>Login to Pipeline app</MainButton>
      </div>
    </div>
  );
};

export default NewPasswordCreated;
