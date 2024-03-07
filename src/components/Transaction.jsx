import React from 'react'
import Filter from '../assets/Filter2.svg'

const Transaction = () => {
  return (
    <div>
        <section className='flex flex-row justify-between'>
            <label className='font-inter text-xl font-medium leading-5 tracking-normal text-center'>Transactions</label>
            <img src={Filter} alt='filter'/>
        </section>
        <div className='bg-black'>
            <input className="w-full bg-textGray px-6 pb-2 text-sm text-textBlack"></input>
        </div>

    </div>
  )
}

export default Transaction