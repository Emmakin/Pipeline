import React from "react";

function SignUp() {
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
        <input placeholder="Phone Number" type="number"></input>
        <input placeholder="password"></input>
        <input type="checkbox" />
      </form>
    </div>
  );
}

export default SignUp;
