import React from 'react'
import Vector from "../assets/Vector.svg"

const HeadAmount = ({title,amount}) => {
  return (
    <div className='flex flex-col '>
        <span >{title}</span>
        <div className='flex flex-row'>
          <span className='text-base font-normal leading-5 text-left'>{amount}</span>
          <img src={Vector} alt='view'/>
        </div>
    </div>
  )
}

export default HeadAmount