import React from "react";
import PipeAmount from "./PipeAmount.jsx";

// const PipelineUnit = ({ percOfTotal, pipeName }) => {
//   const percentage = (percOfTotal * 200).toString() + "px";
//   return (
//     <div className="h-[200px] w-[50px] border-2 rounded-2xl overflow-hidden flex  items-end">
//       <div className={`h-[${percentage}] bg-blue-500 w-full`}></div>
//     </div>
//   );
// };
  const PipelineUnit = () => {
    return (
      <div>
          <div className="w-20 h-80 pt-46 pb-0 pr-0 pl-0 rounded-2xl border-2 border-textBlue">
            <div className="w-1/2 bg-textBlue"></div>
          </div>
          <PipeAmount
            pTitle='personal'
            pAmount='XXXX.XX'
          />
      </div>
    );
  };


export default PipelineUnit;
