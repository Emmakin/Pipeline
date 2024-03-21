import React from 'react'

const Transact = ({transactAmount,transactName,transactNameAndTime,transactIcon}) => {
  return (
    <div>
        <span className='bg-mainBlueFade w-6 h-6 '>hgg{transactIcon}</span>
        <span>
            <span>{transactName}</span>
            <span>{transactNameAndTime}</span>
        </span>
        <span>{transactAmount}</span>
    </div>
  )
}

export default Transact