import React, { useRef } from "react";
import MyRoutes from "./navigation/MyRoutes.jsx";
import Loading from "./components/Loading.jsx";
import Login from "./pages/signUp-Login/Login.jsx";
import WelcomePage from "./pages/homePage/WelcomePage.jsx";
import Error from "./components/Error.jsx";
import PipeAmount from "./components/PipeAmount.jsx";
import PipelineUnit from "./components/PipeUnit.jsx";

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
      {/* {/* <MyRoutes /> */}
      <WelcomePage /> */}
      {/* <PipeAmount /> */}
      {/* <PipelineUnit /> */}
      <WelcomePage />
      {/* <Loading /> */}
      {/* <WelcScreen /> */}
    </div>
  );
}

export default App;
