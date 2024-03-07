import React from 'react'

const Error = ({onCancle, errormsg}) => {
  return (
    <div className="absolute w-full max-w-[475px] h-full z-20 flex items-center justify-center">
      <div className="w-4/5 h-3/5 bg-paleBlue relative m-10 rounded-2xl flex justify-center items-center shadow-lg flex-col">
        <div className="h-[200px] w-[50px] border-[1px] border-red-500 rounded-2xl overflow-hidden items-end flex">
          <div className="bg-red-500 h-1/2 w-full "></div>
        </div>
        <p className="text-center text-semiBold w-4/5 leading-tighter text-sm pt-2">{errormsg}</p>
        <button className='text-white border-none bg-red-500 rounded-md py-2 px-4 mt-4' onClick={onCancle}>Okay</button>
      </div>
    </div>
  );
}

export default Error
