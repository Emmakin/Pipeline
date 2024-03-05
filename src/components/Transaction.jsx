import React from 'react'
import Filter from '../assets/Filter2.svg'

const Transaction = () => {
  return (
    <div className='bg-white w-144 h-157.2'>
        <section className='flex flex-row justify-'>
            <label className='font-inter text-xl font-medium leading-5 tracking-normal text-center'>Transactions</label>
            <img className='fas fa-star w-4 h-4' src={Filter} alt='filter'/>
        </section>

    </div>
  )
}

export default Transaction