import React from "react";

const MainButton = ({ children }) => {
  return (
    <button className="bg-mainBlue w-full p-4 rounded-full text-xl text-white">
      {children}
    </button>
  );
};

export default MainButton;
