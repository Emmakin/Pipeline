import React from "react";

const EntryPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="flex flex-col w-full items-center ">
        <p className="text-black text-[24px] mb-8">Do you want to send to a:</p>
        <button className="w-4/5 text-white bg-mainBlue p-2 text-xl rounded-full">
          Local Pipeline
        </button>
        <p className="text-black text-[24px] my-4">or</p>
        <button className="w-4/5 text-white bg-mainBlue p-2 text-xl rounded-full">
          Foreign Pipeline
        </button>
      </div>
    </div>
  );
};
export default EntryPage;
