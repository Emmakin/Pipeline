import React, { useRef } from "react";
import SignUp from "./pages/SignUp";
<<<<<<< HEAD
// import EntryPage from "./pages/EntryPage";

function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto">
      <SignUp />
      {/* <EntryPage /> */}
=======
import EntryPage from "./pages/EntryPage";
import EmailVeriSent from "./pages/EmailVeriSent";
EmailVeriSent;

function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
      {/* <SignUp /> */}
      {/* <EntryPage /> */}
      <EmailVeriSent />
>>>>>>> origin/Edit-1
    </div>
  );
}

export default App;
