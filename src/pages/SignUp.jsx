import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <div className="w-8 h-8 rounded-full bg-white">
            <img className="w-4 h-4 top-2 left-2 px-1 py-1.5" src={LeftArrow} alt="left arrow"/>
        </div>
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
