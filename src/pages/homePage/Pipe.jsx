import React from "react";

const PipelineUnit = ({ percOfTotal, pipeName }) => {
  const percentage = (percOfTotal * 200).toString() + "px";
  return (
    <div className="h-[200px] w-[50px] border-2 rounded-2xl overflow-hidden flex  items-end">
      <div className={`h-[${percentage}] bg-blue-500 w-full`}></div>
    </div>
  );
};

export default PipelineUnit;
