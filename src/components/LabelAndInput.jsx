import React from "react";

const LabelAndInput = ({
  inputName,
  inputType,
  labelContent,
  info,
  onChange,
  onBlur,

}) => {
  const errorBorder = "border-[1px] border-red-400";

  return (
    <div className="mb-4">
      <div
        className={`w-full h-fit flex flex-col rounded-full overflow-hidden ${
          info.isError && errorBorder
        }`}
      >
        <label
          htmlFor={inputName}
          className="text-[10px] w-full bg-white block px-6 pt-2 text-textGray"
        >
          {labelContent}
        </label>
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          value={info.val}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
        />
      </div>
      {info.isError && <p className="text-red-500 text-xs ml-4">{info.errorMsg}</p>}
    </div>
  );
};

export const LabelAndInputAndLogo = ({
  inputName,
  inputType,
  labelContent,
  icon,
  info,
  onChange,
  onBlur,
}) => {
  const errorBorder = "border-[1px] border-red-400";
  return (
    <div>
      <div
        className={`w-full h-fit flex rounded-full overflow-hidden bg-white pr-6 ${
          info.isError && errorBorder
        }`}
      >
        <div className="h-fit flex flex-col flex-grow">
          <label
            htmlFor={inputName}
            className="text-[10px] w-full bg-white block px-6 pt-2 text-textGray "
          >
            {labelContent}
          </label>
          <input
            type={inputType}
            name={inputName}
            id={inputName}
            value={info.val}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full border-0 outline-none px-6 pb-2 text-sm text-textBlack"
          />
        </div>
        <img src={icon} alt="Show" />
      </div>
      {info.isError && <p className="text-red-500 text-xs ml-4">{info.errorMsg}</p>}
    </div>
  );
};

export default LabelAndInput;
