import React from "react";

const Loading = () => {
  return (
    <div className="absolute w-full max-w-[475px] h-full z-20 flex items-center justify-center">
      <div className="h-[200px] w-[50px] border-2 rounded-2xl overflow-hidden animate-bounce flex items-end">
        <div className="bg-mainBlue h-1/2 w-full "></div>
      </div>
    </div>
  );
};

export default Loading;
