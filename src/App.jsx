import React, { useRef } from "react";
import SignUp from "./pages/SignUp";
import EntryPage from "./pages/EntryPage";
import Login from "./pages/Login";
import EmailVeriSent from "./pages/EmailVeriSent";
import LabelAndInput from "./components/LabelAndInput";
import EnterEmail from "./pages/passwordRecovery/EnterEmail";
import EmailSent from "./pages/passwordRecovery/EmailSent";
import SetPassword from "./pages/passwordRecovery/SetPassword";
import NewPasswordCreated from "./pages/passwordRecovery/NewPasswordCreated";
import WelcScreen from "./pages/WelcScreen";
import Pipe from "./pages/homePage/Pipe.jsx";
import Test from "./pages/Test.jsx";
import MoneyBar from "./pages/homePage/Pipe.jsx";
import WelcomePage from "./pages/homePage/WelcomePage.jsx";

function App() {
  const [currentValue, setCurrentValue] = React.useState(50);
  const maxValue = 100;

  const handleInputChange = (event) => {
    setCurrentValue(parseInt(event.target.value, 10));
  };


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
      <WelcomePage />
    </div>
  );
}

export default App;
