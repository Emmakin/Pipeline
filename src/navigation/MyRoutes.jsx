import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from '../pages/SignUp.jsx';
import Error from '../pages/Error.jsx';
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


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='signup' element={<SignUp />}></Route>
            <Route path='error' element={<Error />}></Route>
        </Routes>
    </Router>
  )
}

export default MyRoutes
