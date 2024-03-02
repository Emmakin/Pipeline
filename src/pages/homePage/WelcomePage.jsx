import React from 'react'
import HeadAmount from '../../components/HeadAmount.jsx'
import PipelineUnit from './Pipe.jsx'

const WelcomePage = () => {
  return (
    <div>
      <span>
        <HeadAmount 
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