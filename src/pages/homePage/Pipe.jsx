import React from "react";

// const PipelineUnit = ({ percOfTotal, pipeName, amount }) => {
//   const percentage = (percOfTotal * 200).toString() + "px";
//   return (
//     <div >
//       <div className="h-[200px] w-[50px] border-2 rounded-2xl overflow-hidden flex  items-end">
//         <div className={`h-[${percentage}] bg-blue-500 w-full`}></div>
//         <span>{pipeName}</span>
//         <span>{amount}</span>
//       </div>
//     </div>
//   );
// };

const PipelineUnit = ({ pipeName, amount }) => {
  return (
    <div >
      <div className="h-[200px] w-[50px] border-2 rounded-2xl overflow-hidden flex  items-end">
        <div></div>
        <span>{pipeName}</span>
        <span>{amount}</span>
      </div>
    </div>
  );
};

export default PipelineUnit;
