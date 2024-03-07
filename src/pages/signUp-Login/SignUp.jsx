import React, { useState, useRef } from "react";
import HeadText from "../../components/HeadText";
import LabelAndInput from "../../components/LabelAndInput";
import MainButton from "../../components/MainButton";
import PageNav from "../../components/PageNav";
import useSessionStorage from "../../modules/useSS";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "../../modules/validateForm";
// import post from "../../modules/post.jsx";

function SignUp() {
  const [username, setUsername] = useSessionStorage("pipelineUsername", {
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [email, setEmail] = useSessionStorage("pipelineEmail", {
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [phoneNum, setPhoneNum] = useSessionStorage("pipelinePhone", {
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [password, setPassword] = useState({
    val: "",
    isError: false,
    errorMsg: "",
  });
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const validatedNameRef = useRef(false);
  const validatedEmailRef = useRef(false);
  const validatedPhoneRef = useRef(false);
  const validatedPassRef = useRef(false);
  const checkedRef = useRef();

  const url = "https://pipeline-mnbv.onrender.com";

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
    validateName(username, setUsername, validatedNameRef);
    validateEmail(email, setEmail, validatedEmailRef);
    validatePhone(phoneNum, setPhoneNum, validatedPhoneRef);
    validatePassword(password, setPassword, validatedPassRef);
    const valid =
      validatedNameRef.current &&
      validatedEmailRef.current &&
      validatedPhoneRef.current &&
      validatedPassRef.current &&
      checkedRef.current.checked;
    if (valid) {
      register()
        .then((res) => {
          if (res.ok || res.status === 409) {
            navigate("/home/welcome");
          }
          setLoading(false);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else console.log("Not valid");
  };

  const post = async (path, body) => {

    setLoading(true);
    let res = await fetch(`${url}/${path}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).catch((error) => {
      navigate("/signup/error");
      return;
    });
    return res;
  };

  const register = async () => {
    const res = await post(
      "auth/register",
      {
        full_name: username.val,
        email: email.val,
        phone_number: "+234" + phoneNum.val.substring(1),
        password: password.val,
        image: "",
      }
    );
    return res;
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="p-4">
        <PageNav pageTitle={"Sign Up"} />
        <section>
          <HeadText addStyles={"mb-3"}>Welcome to Pipeline</HeadText>
          <p className="mb-5">Complete the sign up to get started</p>
        </section>
        <form noValidate onSubmit={handleSubmit}>
          <LabelAndInput
            labelContent={"Name"}
            inputName={"name"}
            inputType={"text"}
            info={username}
            onChange={(event) => {
              setUsername({ ...username, val: event.target.value });
            }}
            onBlur={() => {
              if (touched) {
                validateName(username, setUsername, validatedNameRef);
              }
            }}
          />
          <LabelAndInput
            labelContent={"Email"}
            inputName={"email"}
            inputType={"email"}
            info={email}
            onChange={(event) => {
              setEmail({ ...email, val: event.target.value });
            }}
            onBlur={() => {
              if (touched) {
                validateEmail(email, setEmail, validatedEmailRef);
              }
            }}
          />
          <LabelAndInput
            labelContent={"Phone Number"}
            inputName={"phoneNumber"}
            inputType={"tel"}
            info={phoneNum}
            onChange={(event) => {
              setPhoneNum({ ...phoneNum, val: event.target.value });
            }}
            onBlur={() => {
              if (touched) {
                validatePhone(phoneNum, setPhoneNum, validatedPhoneRef);
              }
            }}
          />
          <LabelAndInput
            labelContent={"Password"}
            inputName={"password"}
            inputType={"password"}
            info={password}
            onChange={(event) => {
              setPassword({ ...password, val: event.target.value });
            }}
            onBlur={() => {
              if (touched) {
                validatePassword(password, setPassword, validatedPassRef);
              }
            }}
          />
          <span>
            <input
              type="checkbox"
              className="mr-2 outline-none"
              ref={checkedRef}
            />
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
    </div>
  );
}

export default SignUp;
