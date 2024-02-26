import React, { useRef } from "react";
import SignUp from "./pages/SignUp";
import EntryPage from "./pages/EntryPage";
import Login from "./pages/Login";
import EmailVeriSent from "./pages/EmailVeriSent";

function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
      {/* <SignUp /> */}
      {/* <EntryPage /> */}
      {/* <EmailVeriSent />?\ */}
      <Login />
    </div>
  );
}

export default App;
