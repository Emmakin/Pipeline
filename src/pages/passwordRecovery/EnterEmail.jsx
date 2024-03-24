import React, { useState, useRef } from "react";
import PageNav from "../../components/PageNav";
import LabelAndInput from "../../components/LabelAndInput";
import MainButton from "../../components/MainButton";
import HeadText from "../../components/HeadText";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../modules/validateForm";
import useRequest from "../../modules/useRequest.jsx";
import Loading from "../../components/Loading.jsx";
import Error from "../../components/Error.jsx";
import { useUser } from "../../MainContext.jsx";

const EnterEmail = () => {
  const [email, setEmail] = useState({ val: "", isError: false, errorMsg: "" });
  const [touched, setTouched] = useState(false);
  const validatedEmailRef = useRef(false);
  const { loading, error, sendRequest, setError, setLoading } = useRequest();
  const {setResetEmail} = useUser()
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched(true);
    validateEmail(email, setEmail, validatedEmailRef);
    if (validatedEmailRef.current) {
      // Send OTP to user
      sendOTP()
        .then((res) => {
          setLoading(false);
          if (!res.ok) {
            return res
              .json()
              .then((data) => setError({ status: true, msg: data.detail }));
          } else {
            setResetEmail(email.val)
            navigate("/passrecovery/emailsent");
          }
        })
        .catch((error) => {
          setError({ status: true, msg: "Something went wrong. Try again." });
        });
    }
  };

  const sendOTP = async () => {
    setLoading(true);
    console.log(email.val);
    const res = await sendRequest("auth/forgot_password", "post", {
      email: email.val,
    });

    // let data = await res.json()
    // console.log(data);
    return res;
  };

  return (
    <div>
      {loading && <Loading />}
      {error.status && (
        <Error
          errormsg={error.msg}
          onCancle={() => setError({ status: false, msg: undefined })}
        />
      )}
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
    </div>
  );
};

export default EnterEmail;
