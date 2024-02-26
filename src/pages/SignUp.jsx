import React from "react";
import LeftArrow from "../assets/chevron-left.svg"

function SignUp() {
  return (
    <div>
      <div>
        <img src={LeftArrow} alt="left arrow"/>
        <span>Sign Up</span>
      </div>
      <section>
        <h3>Welcome to Pipeline</h3>
        <span>complete the sign up to get started</span>
      </section>
      <form>
        <input placeholder="Name" type="text"></input>
        <input placeholder="Email" type="email"></input>
        <input placeholder="Phone Number" type="number"></input>
        <input placeholder="password"></input>
        <div>
          <input type="checkbox" />
          <span><a>By signing up, you agree to the Terms of Service and Privacy Policy</a></span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
