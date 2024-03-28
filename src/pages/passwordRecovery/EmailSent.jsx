import React from "react";
import mailImg from "../../assets/mail.svg";
import MainButton from "../../components/MainButton";
import { useUser } from "../../MainContext";
import { useNavigate } from "react-router-dom";

const EmailSent = () => {
  const {resetEmail, setResetEmail} = useUser()
  const navigate = useNavigate()
  return (
    <div className="p-4 text-center">
      <img src={mailImg} alt="Mail Sent" className="mx-auto pt-10" />
      <p className="text-[24px] text-textBlue font-semibold leading-[29.05px] tracking-tight mb-4">
        Your email has been sent
      </p>
      <p className="text-[14px]">
        Check your email <span className="text-mainBlue">{resetEmail}</span> and follow the instructions to reset your
        password
      </p>
      <MainButton addStyles={"mt-10"} onClick={() => {
        // window.open("mailto:")
        navigate("/login")
        }}>
        Check Email
      </MainButton>
    </div>
  );
};

export default EmailSent;
