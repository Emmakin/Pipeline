import React from "react";
import mailImg from "../../assets/mail.svg";
import MainButton from "../../components/MainButton";
import { useUser } from "../../MainContext";
import { useNavigate } from "react-router-dom";

const EmailVeriSent = () => {
  const {userDetails} = useUser()
  const navigate = useNavigate()
  const openEmail = (event) => {
    console.log(userDetails)
    // window.open("mailto:")
    navigate("/home/welcome")
  }
  return (
    <div className="p-4 text-center">
      <img src={mailImg} alt="Mail Sent" className="mx-auto pt-10" />
      <p className="text-[24px] text-textBlue font-semibold leading-[29.05px] tracking-tight mb-4">
        We have sent an email verification link to your email
      </p>
      <p className="text-[14px]">Click the link to verify your email address</p>
      <MainButton addStyles={"mt-10"} onClick={openEmail}>Continue</MainButton>
    </div>
  );
};

export default EmailVeriSent;
