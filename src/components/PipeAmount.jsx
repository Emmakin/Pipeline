import React from 'react'
import { useState } from 'react'
import Vector from '../assets/Vector.svg'
import Padlock from '../assets/padlock.svg'



const PipeAmount = ({pTitle, pAmount}) => {
 const [showAmount, setShowAmount] = useState(false);  

 const toggleAmount = () => {
  setShowAmount(!showAmount);
 };

  return (
    <div className='flex flex-col justify-center'>
            <span className='font-inter text-lg font-bold leading-6 tracking-normal text-center capitalize'>{pTitle}</span>
            <div className='flex flex-row align-top'>
              <span className='font-inter text-base font-normal leading-5 tracking-normal text-left capitalize '>{showAmount ? pAmount : "XXXX.XX"}</span>
              <img onClick={toggleAmount} src={Vector} alt='view'/>
            </div>
            <span className='flex justify-center' >
              <img src={Padlock} alt='padlock' />
            </span>
    </div>
  )
}

export default PipeAmount