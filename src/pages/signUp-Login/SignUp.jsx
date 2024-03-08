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
import usePost from "../../modules/useRequest";
import Error from "../../components/Error";
// import post from "../../modules/post.jsx";

const SignUp = () => {
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

  const { loading, sendRequest, setLoading, error, setError } = usePost();

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
          setLoading(false);
          if (res.status === 409) {
            setError({
              status: true,
              msg: "User with the inputed credentials already exists. Try again or login if you already have a pipeline account.",
            });
            return
          } else if (!res.ok) {
            setError({
              status: true,
              msg: "Invalid credentials. Please try again",
            });
            return
          } else if(res.ok) {
            navigate("/home/welcome")
          }
          console.log(res);
        })
        .catch((error) => {});
    } else console.log("Not valid");
  };

  const register = async () => {
    const res = await sendRequest("auth/register", "post", {
      full_name: username.val,
      email: email.val,
      phone_number: "+234" + phoneNum.val.substring(1),
      password: password.val,
      image: "",
    });
    console.log(res);
    return res;
  };

  return (
    <div>
      {loading && <Loading />}
      {error.status && (
        <Error
          onCancle={() => setError({ status: false, msg: undefined })}
          errormsg={error.msg}
        />
      )}
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

          <p className="text-center text-sm mt-2">
            Already have an account? <span className="text-mainBlue underline" onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
