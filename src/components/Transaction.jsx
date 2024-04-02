import React from 'react'
import Filter from '../assets/Filter2.svg'
import Search from '../assets/search.svg'
// import Transact from './Transact'
import useRequest from '../modules/useRequest'

const Transaction = () => {
  const {sendRequest} = useRequest()
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

const Transact = ({
  transactionAmount,
  senderName="Pipeline",
  timeStamp,
  transactionType,
  remark
}) => {
  return (
    <div className="flex justify-around items-center flex-row mt-4">
      <span className="flex align-middle justify-center w-12 h-12 p-3 rounded-full text-xl bg-slate-300 text-blue-600">
        {senderName ? senderName[0]: "P"}
      </span>
      <span className="flex flex-col pl-3">
        <span className="w-64 h-6 text-base font-medium leading-tight text-left">
          {remark ? remark : senderName} 
        </span>
        <span className="text-xs leading-loose text-stone-400">
          {sender} {timeStamp} John Ogaga 12:03AM
        </span>
      </span>
      <span className="text-base font-bold leading-tight text-right text-green-600">
        {transactionAmount}20,093
      </span>
    </div>
  );
};

export default Transaction