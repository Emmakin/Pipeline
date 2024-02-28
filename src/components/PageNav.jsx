import React, { useState } from "react";
import left from "../assets/back.svg";

const PageNav = ({pageTitle}) => {
  return (
    <div className="flex justify-between items-center mb-10 relative">
      <img src={left} alt="back" className="absolute" />
      <p className=" w-full text-center">{pageTitle}</p>
    </div>
  );
};

export default PageNav;
