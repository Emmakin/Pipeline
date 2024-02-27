import React from 'react'
import LeftArrow from '../assets/chevron-left.svg';


function WelcScreen() {
 const link =  'w-108 h-16'


  return (
    <div>
      <div>
        <span>Login</span>
        <img src={LeftArrow} alt="left arrow"/>
      </div>
      <section>
        <span className='text-2xl font-bold leading-9 tracking-normal text-left'>Welcome</span>
        <span>Your email has been verified! Now you can Login.</span>
      </section>
      <section>
      <input className={link} placeholder="Email" type="email"></input>
      <input placeholder="Password" type="password"></input>
      </section>
      <span>Forget Password?</span>
      <button>Register</button>
      <button>Login</button>
    </div>
  )
}

export default WelcScreen