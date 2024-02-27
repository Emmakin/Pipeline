import React from "react";

const LabelAndInput = ({ inputName, inputType, labelContent }) => {
  return (
    <div className="w-full h-fit flex flex-col rounded-full overflow-hidden mb-4">
      <label
        htmlFor="email"
        className="text-[10px] w-full bg-white block px-6 pt-2 text-textGray"
      >
        {labelContent}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
      />
    </div>
  );
};

export default LabelAndInput;
