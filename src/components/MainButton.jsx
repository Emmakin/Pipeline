import React from "react";

const MainButton = ({ children, addStyles }) => {
  return (
    <button
      className={`bg-mainBlue w-full p-4 rounded-full text-xl text-white ${addStyles}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
