import React from "react";

const HeadText = ({ children, addStyles }) => {
  return (
    <h1
      className={`text-textBlue text-2xl font-bold tracking-tighter leading-[31px] ${addStyles}`}
    >
      {children}
    </h1>
  );
};

export default HeadText;
