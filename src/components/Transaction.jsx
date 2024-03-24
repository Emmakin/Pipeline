import React from 'react'
import Filter from '../assets/Filter2.svg'
import Search from '../assets/search.svg'
import Transact from './Transact'




const Transaction = () => {
  return (
    <div>
        <section className='flex flex-row justify-between gap-2'>
            <label className='font-inter text-xl font-medium leading-5 tracking-normal text-center p-4'>Transactions</label>
            <img src={Filter} className="p-4" alt='filter'/>
        </section>
        <div className='bg-slate-100 rounded-full flex flex-row h-25'>
            <img className='w-4 h-4' src={Search} alt='search'/>
            <input  placeholder="Search transations" className= " bg-transparent pt-2 pb-2 text-textBlack"></input>
        </div>
        <Transact />
        <Transact />
        <span className=' flex align-middle justify-center text-stone-400 pt-2 '>See more...</span>
    </div>
  )
}

export default Transaction