import React from "react";

const LabelAndInput = ({
  inputName,
  inputType,
  labelContent,
  value,
  onChange,
  errorMsg,
  isError,
}) => {
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
        value={value}
        onChange={onChange}
        className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
      />
      {isError && <p className="text-red-500 text-xs">{errorMsg}</p>}
    </div>
  );
};

export default LabelAndInput;
