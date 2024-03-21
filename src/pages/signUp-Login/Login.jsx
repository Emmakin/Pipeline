import React, { useState, useRef } from "react";
import show from "../../assets/show.svg";
import LabelAndInput, {
  LabelAndInputAndLogo,
} from "../../components/LabelAndInput";
import PageNav from "../../components/PageNav";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "../../modules/useSS";
import { validateEmail, validatePassword } from "../../modules/validateForm";
import Loading from "../../components/Loading";
import useRequest from "../../modules/useRequest";
import Error from "../../components/Error";
import { useUser } from "../../MainContext";

const Login = () => {
  const [email, setEmail] = useSessionStorage("pipelineEmail", {
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
  const {setUserDetails} = useUser()

  const navigate = useNavigate();
  const validatedEmailRef = useRef(false);
  const validatedPassRef = useRef(false);
  const { loading, setLoading, sendRequest, setError, error } = useRequest();

  const url = "https://pipeline-mnbv.onrender.com";

  const login = async () => {
    const res = await sendRequest("auth/login", "post", {
      email: email.val,
      password: password.val,
    });
    console.log(res);
    return res;
  };

  const handleSubmit = (event) => {
    setTouched(true);
    validateEmail(email, setEmail, validatedEmailRef);
    validatePassword(password, setPassword, validatedPassRef);

    if (validatedEmailRef.current && validatedPassRef.current) {
      login()
        .then((res) => {
          setLoading(false);
          if (res.status === 404) {
            setError({
              status: true,
              msg: "User with credentials does not exist. Please check email or click register to open a pipeline account.",
            });
            return;
          } else if (res.status >= 400) {
            setError({
              status: true,
              msg: "Invalid Email or Password! Please try again.",
            });
            return;
          } else if (res.ok) {
            return res.json();
          }
        })
      .then((res) => {if(res) {
        setUserDetails(res.user)
        navigate("/home/welcome")
      }})
        .catch((error) => {
          console.log(error);
          setError({ status: true, msg: "Something went wrong. Try again." });
        });
    }
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
        <PageNav pageTitle="Login" />
        <h1 className="text-textBlue text-2xl font-bold mb-3">Welcome</h1>
        <p className="text-sm mb-6">Login to see your pipelines.</p>
        <form
          noValidate
          className="mb-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <LabelAndInput
            labelContent="Email"
            inputName="email"
            inputType="email"
            info={email}
            onChange={(event) => {
              setEmail({ ...email, val: event.target.value });
            }}
            onBlur={() => {
              if (touched) validateEmail(email, setEmail, validatedEmailRef);
            }}
          />
          <LabelAndInputAndLogo
            icon={show}
            info={password}
            labelContent="Password"
            inputName="password"
            inputType="password"
            onChange={(event) => {
              setPassword({ ...password, val: event.target.value });
            }}
            onBlur={() => {
              if (touched)
                validatePassword(password, setPassword, validatedPassRef);
            }}
          />
        </form>
        <p className="text-mainBlue text-sm text-right" onClick={() => navigate("/passrecovery/enteremail")}>Forgot Password?</p>
        <div className="flex justify-between w-4/5 mx-auto mt-12 items-center">
          <button
            className="text-xs bg-mainBlueFade text-mainBlue px-6 py-1.5 rounded-full h-fit"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
          <button
            className="bg-mainBlue text-white px-10 py-2 rounded-full text-xl"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
