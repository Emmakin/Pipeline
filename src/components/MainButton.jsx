import React from "react";

const MainButton = ({ children, addStyles, type, onClick }) => {
  return (
    <button
      className={`bg-mainBlue w-full p-4 rounded-full text-xl text-white ${addStyles}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
