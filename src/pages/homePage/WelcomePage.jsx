import React from 'react'
import HeadAmount from '../../components/HeadAmount.jsx'
import PipelineUnit from '../../components/Pipe.jsx'
import Transaction from '../../components/Transaction.jsx'

const WelcomePage = () => {
  return (
    <div className='pt-16 pl-8 pr-8'>
      <span className='font-inter text-2xl font-medium leading-9 tracking-tight text-left
' >     <HeadAmount 
          title="Welcome Chris"
          amount="XXXX.XX"
        />
      </span>
      <section className='flex justify-evenly align-middle mt-7'>
        <PipelineUnit 
        pipeName='Personal'
        amount="XXXX.XX"
        />
        <PipelineUnit 
        pipeName='Personal'
        amount="XXXX.XX"
        />
      </section>
      <section>
        <Transaction />
      </section>
    </div>
  )
}

export default WelcomePage