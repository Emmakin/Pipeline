import React from 'react'
import Vector from '../assets/Vector.svg'
import Padlock from '../assets/padlock.svg'

const PipeAmount = ({pTitle,pAmount}) => {
  return (
    <div>
        <div className='flex flex-col '>
            <span >{pTitle}</span>
            <div className='flex flex-row'>
              <span>{pAmount}</span>
              <img src={Vector} alt='view'/>
            </div>
            <span>
              <img src={Padlock} alt='padlock'/>
            </span>
        </div>
    </div>
  )
}

export default PipeAmount