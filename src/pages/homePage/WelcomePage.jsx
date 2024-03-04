import React from 'react'
import HeadAmount from '../../components/HeadAmount.jsx'
import PipelineUnit from '../../components/Pipe.jsx'

const WelcomePage = () => {
  return (
    <div>
      <span className='font-inter text-2xl font-medium leading-9 tracking-tight text-left
' >     <HeadAmount 
          title="Welcome Chris"
          amount="XXXX.XX"
        />
      </span>
        <PipelineUnit 
        pipeName='Personal'
        amount="XXXX.XX"
        />
      <section>

      </section>
    </div>
  )
}

export default WelcomePage