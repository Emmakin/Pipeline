import React from "react";

function SignUp() {
  const thisRef = useRef();
  return (
    <div>
      <div>header</div>
      <section>
        <h3>Welcome to Pipeline</h3>
        <span>complete the sign up to get started</span>
      </section>
      <form>
        <input placeholder="Name" type="text"></input>
        <input placeholder="Email" type="email"></input>
        <input placeholder="Phone Number" type="number" ref="thisRef"></input>
        <input placeholder="password"></input>
        <input type="checkbox" />
      </form>
    </div>
  );
}

export default SignUp;
