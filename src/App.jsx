import React, { useRef } from "react";
import SignUp from "./pages/Onboarding/SignUp";
import EntryPage from "./pages/Onboarding/EntryPage";
import EmailVeriSent from "./pages/Onboarding/EmailVeriSent";
import Login from "./pages/Onboarding/Login";
EmailVeriSent;

function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
      {/* <SignUp /> */}
      {/* <EntryPage /> */}
      {/* <EmailVeriSent /> */}
      <Login />
    </div>
  );
}

export default App;
