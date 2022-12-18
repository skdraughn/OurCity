import { Auth } from "aws-amplify"
import { useNavigate } from "react-router-dom"
import './Auth.css'

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // await Auth.signIn(document.getElementById('username').value, document.getElementById('password').value)
      navigate("/")
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Sign In</h1>
        <input id={'username'} placeholder={'email'} />
        <input id={'password'} placeholder={'password'} type={'password'} />
        <button id={'login'} onClick={handleLogin}>Login</button>
        <button id={'navSignup'} onClick={() => { navigate('/signup') }}>Sign Up</button>
        <p className='link' id={'navForgot'} onClick={() => { navigate('/forgot') }}>Forgot Password?</p>
      </div>
    </div>
  )
}

export default SignIn
