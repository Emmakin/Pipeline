import React from 'react'
import PageNav from '../components/PageNav';
import HeadText from '../components/HeadText';
import LabelAndInput from '../components/LabelAndInput';


function WelcScreen() {
  return (
    <div className='p-4'>
      <PageNav pageTitle={"Login"} />
      <section>
        <HeadText>Welcome</HeadText>
        <span>Login to see your pipelines.</span>
      </section>
      <section>
      <LabelAndInput labelContent={"Name"} inputName={"name"} inputType={"text"} />
      </section>
      <span>Forget Password?</span>
      <button>Register</button>
      <button>Login</button>
    </div>
  )
}

export default WelcScreen