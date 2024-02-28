import React, { useState, useRef } from "react";
import HeadText from "../components/HeadText";
import LabelAndInput from "../components/LabelAndInput";
import MainButton from "../components/MainButton";
import PageNav from "../components/PageNav";

function SignUp() {
  const [username, setUsername] = useState({
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [email, setEmail] = useState({ val: "", isError: false, errorMsg: "" });
  const [phoneNum, setPhoneNum] = useState({
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [password, setPassword] = useState({
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [touhed, setTouched] = useState(false);

  const validatedRef = useRef(false);

  const errorBorder = "border-[1px] border-red-400";

  const validateName = () => {
    if (!username || username.trim() === "") {
      setUsername({
        ...username,
        isError: true,
        errorMsg: "Please input your name",
      });
    }
  };

  const validateEmail = () => {
    if (!email || email.trim() === "") {
      setEmail({
        ...email,
        isError: true,
        errorMsg: "Please input your email",
      });
      return;
    }
    const reg = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/";
    if (!reg.test(email)) {
      setEmail({
        ...email,
        isError: true,
        errorMsg: "Invalid email",
      });
    }
  };

  const validatePhone = () => {
    if (!phoneNum || phoneNum.trim() === "") {
      setPhoneNum({
        ...password,
        isError: true,
        errorMsg: "Please input your phone number",
      });
      return;
    }
    const reg = "/^(?:ds?){11}$/";
    if (!reg.test(phoneNum)) {
      setPhoneNum({
        ...phoneNum,
        isError: true,
        errorMsg: "Invalid phone number",
      });
    }
  };

  const validatePassword = () => {
    if (!password || password.trim() === "") {
      setPassword({
        ...password,
        isError: true,
        errorMsg: "Please input your password",
      });
      return;
    }
    if (phoneNum.length() < 6) {
      setPhoneNum({
        ...phoneNum,
        isError: true,
        errorMsg: "Password should be more than 6 characters",
      });
    }
  };

  return (
    <div className="p-4">
      <PageNav pageTitle={"Sign Up"} />
      <section>
        <HeadText addStyles={"mb-3"}>Welcome to Pipeline</HeadText>
        <p className="mb-5">Complete the sign up to get started</p>
      </section>
      <form noValidate>
        <LabelAndInput
          labelContent={"Name"}
          inputName={"name"}
          inputType={"text"}
          value={username.val}
          isError={username.isError}
          errorMsg={username.errorMsg}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <LabelAndInput
          labelContent={"Email"}
          inputName={"email"}
          inputType={"email"}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email.val}
        />
        <LabelAndInput
          labelContent={"Phone Number"}
          inputName={"phone number"}
          inputType={"tel"}
          onChange={(event) => {
            setPhoneNum(event.target.value);
          }}
          value={phoneNum.val}
        />
        <LabelAndInput
          labelContent={"Password"}
          inputName={"password"}
          inputType={"password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password.val}
        />
        <span>
          <input type="checkbox" className="mr-2 outline-none" />
          <span>
            By signing up, you agree to the{" "}
            <a href="#" className="text-mainBlue">
              Terms of Service and Privacy Policy
            </a>
          </span>
          <MainButton
            addStyles={"mt-10"}
            onClick={() => {
              setTouched(true);
            }}
          >
            Sign Up
          </MainButton>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
