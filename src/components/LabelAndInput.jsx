import React from "react";

const LabelAndInput = ({
  inputName,
  inputType,
  labelContent,
  value,
  onChange,
  errorMsg,
  isError,
  onBlur,
}) => {

  
  const errorBorder = "border-[1px] border-red-400";
  
  return (
    <div className="mb-4">
      <div className={`w-full h-fit flex flex-col rounded-full overflow-hidden ${isError && errorBorder}`}>
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
          onBlur={onBlur}
          className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
        />
      </div>
      {isError && <p className="text-red-500 text-xs ml-4">{errorMsg}</p>}
    </div>
  );
};

export default LabelAndInput;
