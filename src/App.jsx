import React, { useRef } from "react";
import MyRoutes from "./navigation/MyRoutes.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  return (
    <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
      {/* <SignUp /> */}
      {/* <EntryPage /> */}
      {/* <EmailVeriSent /> */}
      {/* <Login /> */}
      {/* <EnterEmail /> */}
      {/* <EmailSent /> */}
      {/* <SetPassword /> */}
      {/* <NewPasswordCreated /> */}
      {/* <Pipe /> */}
      {/* <Test /> */}
      <MyRoutes />
      {/* <Loading /> */}
    </div>
  );
}

export default App;
