 import React from 'react'

const Transact = ({transactAmount,transactName,transactNameAndTime,transactIcon}) => {
  return (
    <div className='flex justify-around items-center flex-row mt-4'>
        <span className='flex align-middle justify-center w-12 h-12 p-3 rounded-full text-xl bg-slate-300 text-blue-600'>h{transactIcon}</span>
        <span className='flex flex-col pl-3'>
            <span className='w-64 h-6 text-base font-medium leading-tight text-left'>{transactName}John Ogaga</span>
            <span className='text-xs leading-loose text-stone-400'>{transactNameAndTime}John Ogaga 12:03AM</span>
        </span>
        <span className='text-base font-bold leading-tight text-right text-green-600'>{transactAmount}20,093</span>
    </div>
  )
}

export default Transact