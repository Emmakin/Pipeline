import React, { useState, useRef } from "react";
import PageNav from "../../components/PageNav";
import LabelAndInput from "../../components/LabelAndInput";
import MainButton from "../../components/MainButton";
import HeadText from "../../components/HeadText";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../modules/validateForm";

const EnterEmail = () => {
  const [email, setEmail] = useState({val: "", isError: false, errorMsg: ""})
  const [touched, setTouched] = useState(false);
  const validatedEmailRef = useRef(false);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched(true)
    validateEmail(email, setEmail, validatedEmailRef)
    if (validatedEmailRef.current) {
      // Send verification email to user
      // window.open("mailto:")
      navigate("/passrecovery/emailsent");
    }
  }

  const sendOTP = async () => {

  }
  
  return (
    <div className="p-4">
      <PageNav pageTitle="Forgot Password" />

      <HeadText addStyles={"mb-6"}>
        Enter your email and we’ll send you a link to reset your password.
      </HeadText>

      <form onSubmit={handleSubmit} noValidate>
        <LabelAndInput
          inputName="email"
          inputType="email"
          labelContent="Email"
          info={email}
          onChange={(event) => {
            setEmail({ ...email, val: event.target.value });
          }}
          onBlur={() => {
            if (touched) validateEmail(email, setEmail, validatedEmailRef);
          }}
        />
        
        <MainButton addStyles="mt-20" type={"submit"}>
          Continue
        </MainButton>
      </form>
    </div>
  );
};

export default EnterEmail;
