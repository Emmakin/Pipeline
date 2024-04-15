import React, { useRef } from "react";
import MyRoutes from "./navigation/MyRoutes.jsx";
import Loading from "./components/Loading.jsx";
import Login from "./pages/signUp-Login/Login.jsx";

import WelcomePage from "./pages/homePage/WelcomePage.jsx";

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
      {/* <WelcScreen /> */}
      {/* <WelcomePage /> */}
    </div>
  );
}

export default App;
// import React, { useRef } from "react";
// import MyRoutes from "./navigation/MyRoutes.jsx";
// import Loading from "./components/Loading.jsx";
// import Login from "./pages/signUp-Login/Login.jsx";
// import WelcomePage from "./pages/homePage/WelcomePage.jsx";
// import Error from "./components/Error.jsx";
// import PipeAmount from "./components/PipeAmount.jsx";
// import PipelineUnit from "./components/Pipe.jsx";

// function App() {
//   return (
//     <div className="wrapper max-w-[475px] mx-auto bg-paleBlue min-h-screen">
//       {/* <SignUp /> */}
//       {/* <EntryPage /> */}
//       {/* <EmailVeriSent /> */}
//       {/* <Login /> */}
//       {/* <EnterEmail /> */}
//       {/* <EmailSent /> */}
//       {/* <SetPassword /> */}
//       {/* <NewPasswordCreated /> */}
//       {/* <Pipe /> */}
//       {/* <Test /> */}
//       <MyRoutes />
//       {/* <PipeAmount /> */}
//       {/* <PipelineUnit /> */}
//       {/* <WelcomePage /> */}
//       {/* <Loading /> */}
//       {/* <WelcScreen /> */}
//       {/* <Error /> */}
//     </div>
//   );
// }

// export default App;
