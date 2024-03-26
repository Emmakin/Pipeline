import React from 'react'
import HeadAmount from '../../components/HeadAmount.jsx'
import PipelineUnit from '../../components/PipeUnit.jsx'
import Transaction from '../../components/Transaction.jsx'

const WelcomePage = () => {

  return (
    <div className='pt-16 pl-8 pr-8'>
      <span className='font-inter text-2xl font-medium leading-9 tracking-tight text-left
' >     <HeadAmount 
          title="Welcome Chris"
          amount="AAAA.AA"
        />
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