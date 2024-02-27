import React, { useRef } from "react";
import SignUp from "./pages/SignUp";
import EntryPage from "./pages/EntryPage";
import Login from "./pages/Login";
import EmailVeriSent from "./pages/EmailVeriSent";
import LabelAndInput from "./components/LabelAndInput";
import EnterEmail from "./pages/passwordRecovery/EnterEmail";
import EmailSent from "./pages/passwordRecovery/EmailSent";
import SetPassword from "./pages/passwordRecovery/SetPassword";

function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
      {/* <SignUp /> */}
      {/* <EntryPage /> */}
      {/* <EmailVeriSent /> */}
      {/* <Login /> */}
      {/* <EnterEmail /> */}
      {/* <EmailSent /> */}
      <SetPassword />
    </div>
  );
}

export default App;
