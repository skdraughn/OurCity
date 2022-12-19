import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Amplify, Storage} from 'aws-amplify';
import { useState } from 'react';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ConfirmSignUp from './pages/auth/ConfirmSignUp';
import Home from './pages/home/Home';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import PageNotFound from './pages/PageNotFound';
import { colors } from './theme/colors';
import config from './aws-exports';

const App = () => {
  
  Amplify.configure(config)
  
  // Amplify.configure({
  //   Auth: {
  //     identityPoolId: 'us-east-1:53bf61cd-d208-4d24-80c4-733ba6d08b7e',
  //     region: 'us-east-1',
  //     userPoolId:  'us-east-1_eOiFsqtOX',
  //     userPoolWebClientId: '2lk032avr1rceqbsqvn1oen74n',
  //   },
  //   Storage: {
  //     AWSS3: {
  //       bucket: 'librarypromotions29f15a516c094b4e8bfbc0243608e062610-dev',
  //       region: 'us-east-1'
  //     }
  //   }
  // })

  
  return (
    <Router>
      <div style={{backgroundColor: colors.secondaryBackground}}>
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
