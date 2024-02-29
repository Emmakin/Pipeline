import React, { useState } from 'react'

const test = () => {
    const [val, setVal] = useState()
    let url = "https://pipeline-mnbv.onrender.com";

    async function post(path, body) {
      let res = await fetch(`${url}/${path}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setVal(await res.json())
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

    regiter().then(() => login());



  return (
    <div>
      
    </div>
  )
}

export default test
