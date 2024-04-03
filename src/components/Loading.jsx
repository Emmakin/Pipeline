import React from "react";

const Loading = () => {
  return (
    <div className="absolute w-full max-w-[475px] h-full z-20 flex items-center justify-center">
      <div className="w-4/5 h-3/5 bg-paleBlue relative m-10 rounded-2xl flex justify-center items-center shadow-lg flex-col">
        <div className="h-[200px] w-[50px] border-[1px] border-black rounded-2xl overflow-hidden animate-bounce items-end flex">
          <div className="bg-mainBlue h-1/2 w-full "></div>
        </div>
        <p className="text-center text-semiBold text-xl">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
