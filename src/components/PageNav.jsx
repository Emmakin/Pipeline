import React, { useState } from "react";
import left from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

const PageNav = ({pageTitle}) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center mb-10 relative">
      <img src={left} alt="back" className="absolute" onClick={() => navigate(-1)}/>
      <p className=" w-full text-center">{pageTitle}</p>
    </div>
  );
};

export default PageNav;
