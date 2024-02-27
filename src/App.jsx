import React, { useRef } from "react";
import SignUp from "./pages/SignUp";
import EntryPage from "./pages/EntryPage";
import EmailVeriSent from "./pages/EmailVeriSent";
EmailVeriSent;
import WelcScreen from "./pages/WelcScreen";


function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
      {/* <SignUp /> */}
      {/* <EntryPage /> */}
      {/* <EmailVeriSent /> */}
      <WelcScreen />
    </div>
  );
}

export default App;
