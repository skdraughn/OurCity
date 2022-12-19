import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Amplify} from 'aws-amplify';
import awsmobile from './aws-exports';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ConfirmSignUp from './pages/auth/ConfirmSignUp';
import Home from './pages/home/Home';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  Amplify.configure(awsmobile);
  
  return (
    <Router>
      <div>
          
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/confirm/:username" element={<ConfirmSignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset/:username" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;
