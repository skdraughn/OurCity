import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Amplify, Storage } from "aws-amplify";
import { useState } from "react";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ConfirmSignUp from "./pages/auth/ConfirmSignUp";
import Home from "./pages/home/Home";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import PageNotFound from "./pages/PageNotFound";
import { colors } from "./theme/colors";
import config from "./aws-exports";
import LegalPage from "./legal/LegalPage";
import AuthHeader from "./pages/auth/AuthHeader";

const App = () => {
  Amplify.configure(config);

  return (
    <div>
      <Router>
        <div style={{ backgroundColor: 'black' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/confirm/:username" element={<ConfirmSignUp />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset/:username" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
export default App;
