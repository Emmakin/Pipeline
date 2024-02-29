import React, { useState } from "react";
import MainButton from "../components/MainButton";
import HeadText from "../components/HeadText";

const test = () => {
  const [val, setVal] = useState();
  let url = "https://pipeline-mnbv.onrender.com";

  async function post(path, body) {
    let res = await fetch(`${url}/${path}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    setVal(await res.json());
    console.log(res.status, await res.json());
  }

  let email = "prmpsmart@mailinator.com";
  let password = "prmpsmart";

  async function login() {
    await post("auth/login", {
      email: email,
      password: password,
    });
  }

  async function regiter() { 
    await post("auth/register", {
      full_name: "PRMP Smart",
      email: email,
      phone_number: "+2348168524477",
      password: password,
      image: "",
    });
  }

  // regiter().then(() => login());

  return (
    <div>
      <HeadText>{val?.toString()}</HeadText>
      <MainButton onClick={() => regiter()} className="mb-6">Reg</MainButton>
      <MainButton onClick={() => login()}>Login</MainButton>
    </div>
  );
};

export default test;
