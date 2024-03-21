import React from 'react'
import Filter from '../assets/Filter2.svg'
import Transact from './Transact'




const Transaction = () => {
  return (
    <div>
        <section className='flex flex-row justify-between'>
            <label className='font-inter text-xl font-medium leading-5 tracking-normal text-center p-4'>Transactions</label>
            <img src={Filter} alt='filter'/>
        </section>
        <div>
            <input  placeholder="Search transations" className="w-40 bg-textGray px-6 pb-2 text-20 text-textBlack p-4"></input>
        </div>
        <Transact />

    </div>
  )
}

export default Transaction