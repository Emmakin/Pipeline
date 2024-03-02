import React from "react";
import padlock from "../../assets/padlock.svg"

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

const Pipe = ({ pipeName, amount }) => {
  return (
    <div >
      <div className="h-[200px] w-[50px] border-2 rounded-2xl overflow-hidden flex  items-end">
        <span>{pipeName}</span>
        <span>{amount}</span>
        <span>
          <img src={padlock} alt="padlock" />
        </span>
      </div>
    </div>
  );
};

export default Pipe;
