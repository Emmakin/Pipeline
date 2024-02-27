import React from "react";
import MainButton from "../components/MainButton";

const EntryPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="flex flex-col w-4/5 items-center ">
        <p className="text-black text-[24px] mb-8">Do you want to send to a:</p>
        <MainButton>Local Pipeline</MainButton>
        <p className="text-black text-[24px] my-4">or</p>
        <MainButton>Foreign Pipeline</MainButton>
      </div>
    </div>
  );
};
export default EntryPage;
