import React from "react";
import mailImg from "../assets/mail.svg";

const EmailVeriSent = () => {
  return (
    <div className="p-4 text-center">
      <img src={mailImg} alt="Mail Sent" className="mx-auto pt-10" />
      <p className="text-[24px] text-textBlue font-semibold leading-[29.05px] tracking-tight mb-4">
        We have sent an email verification link to your email
      </p>
      <p className="text-[14px]">Click the link to verify your email address</p>
      <button className="bg-mainBlue w-full p-4 rounded-full text-xl text-white mt-10">
        Open Email
      </button>
    </div>
  );
};

export default EmailVeriSent;
