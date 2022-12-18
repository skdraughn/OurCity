import { useNavigate, Link } from "react-router-dom";
import { Auth } from "aws-amplify";
const ForgotPassword = () => {
  const navigate = useNavigate()

  const handleForgot = async () => {
    // Auth.forgotPassword(document.getElementById('username').value)
    console.log('placeholder for forgot password function')
      .then((data) => {
        console.log(data)
        navigate('/reset/' + document.getElementById('username').value)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Forgot Password</h1>
        <input id={'username'} placeholder={'email'} />
        <button id={'forgot'} onClick={handleForgot}>Send Code</button>
        <p className='link' id={'navLogin'} onClick={() => navigate('/login')}>Back to Sign In</p>
      </div>
    </div>
  )
}

export default ForgotPassword