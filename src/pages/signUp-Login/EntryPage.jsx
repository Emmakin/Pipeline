import React from "react";
import MainButton from "../../components/MainButton"; 
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col w-4/5 items-center ">
        <p className="text-black text-[24px] mb-8">Do you want to send to a:</p>
        <MainButton onClick={() => navigate("/login")}>Local Pipeline</MainButton>
        <p className="text-black text-[24px] my-4">or</p>
        <MainButton onClick={() => navigate("/login")}>Foreign Pipeline</MainButton>
      </div>
    </div>
  );
};
export default EntryPage;
