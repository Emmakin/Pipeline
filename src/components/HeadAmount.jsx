import React from 'react'
import { useState } from 'react';
import Vector from "../assets/Vector.svg"

const HeadAmount = ({title,amount}) => {
  const [showHeadAmount, setShowHeadAmount] = useState(false);  

  const toggleAmount = () => {
   setShowHeadAmount(!showHeadAmount);
  };

  return (
    <div className='flex flex-col '>
        <span >{title}</span>
        <div className='flex flex-row'>
          <span className='text-base font-normal leading-5 text-left'>{showHeadAmount ? amount : "XXXX.XX"}</span>
          <img onClick={toggleAmount} src={Vector} alt='view'/>
        </div>
    </div>
  )
}

export default HeadAmount