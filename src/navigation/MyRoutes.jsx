import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from '../pages/signUp-Login/SignUp.jsx'
// import EntryPage from "./pages/EntryPage";
// import Login from "./pages/Login";
// import EmailVeriSent from "./pages/EmailVeriSent";
// import LabelAndInput from "./components/LabelAndInput";
// import EnterEmail from "./pages/passwordRecovery/EnterEmail";
// import EmailSent from "./pages/passwordRecovery/EmailSent";
// import SetPassword from "./pages/passwordRecovery/SetPassword";
// import NewPasswordCreated from "./pages/passwordRecovery/NewPasswordCreated";
// import WelcScreen from "./pages/WelcScreen";
// import Pipe from "./pages/homePage/Pipe.jsx";
// import Test from "./pages/Test.jsx";
import  WelcomePage from "../pages/homePage/WelcomePage.jsx"
import EntryPage from "../pages/signUp-Login/EntryPage.jsx"
import Login from '../pages/signUp-Login/Login.jsx';
import EmailVeriSent from '../pages/signUp-Login/EmailVeriSent.jsx';
import EnterEmail from '../pages/passwordRecovery/EnterEmail.jsx';
import EmailSent from '../pages/passwordRecovery/EmailSent.jsx';
import SetPassword from "../pages/passwordRecovery/SetPassword.jsx";
import NewPasswordCreated from "../pages/passwordRecovery/NewPasswordCreated.jsx"

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<EntryPage />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='verifyEmail' element={<EmailVeriSent />}></Route>
            <Route path='home/welcome' element={<WelcomePage />}></Route>
            <Route path="passrecovery/enteremail" element={<EnterEmail />}></Route>
            <Route path="passrecovery/emailsent" element={<EmailSent />}></Route>
            <Route path="passrecovery/enternewpass" element={<SetPassword />}></Route>
            <Route path="passrecovery/loginnewpass" element={<NewPasswordCreated />}></Route>
        </Routes>
    </Router>
  )
}

export default MyRoutes
