import React, { useState } from 'react'
import HeadAmount from '../../components/HeadAmount.jsx'
import PipelineUnit from '../../components/PipeUnit.jsx'
import Transaction from '../../components/Transaction.jsx'
import { useUser } from '../../MainContext.jsx'
import HeadText from '../../components/HeadText.jsx'

const WelcomePage = () => {

  // const {userDetails} = useUser()
  const [userDetails, setUserDetails] = useState()
  return (
    <div className='pt-16 pl-8 pr-8'>
      <span className='font-inter text-2xl font-medium leading-9 tracking-tight text-left'>     
      {/* <HeadAmount 
          title="Welcome Chris"
          amount="XXXX.XX"
        /> */}

      <p>Welcome <span>{userDetails?.full_name}</span></p>
      </span>
      <section className='flex justify-evenly align-middle mt-7'>
        <PipelineUnit 
          pTitle="personal"
          pAmount="AAAA.AA"
        />
        <PipelineUnit 
          pTitle="business"
          pAmount="AAAA.AA"
        />
      </section>
      <section className='mt-8 bg-white rounded-2xl pl-8 pr-8'>
        <Transaction />
      </section>
    </div>
  )
}

export default WelcomePage