import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import { useState } from "react"
import { colors } from "../../theme/colors"
import AuthHeader from "./AuthHeader"

const SignUp = () => {
  const [userType, setUserType] = useState(null)
  const [errorMessage, setErrorMessage]  = useState(null)
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      const first = document.getElementById('first').value
      const last = document.getElementById('last').value
      await Auth.signUp({ username: document.getElementById('username').value, 
      password: document.getElementById('password').value, //Fix password to have normal restrictions
       attributes: {
        preferred_username: document.getElementById('username').value, 
        name: userType === 'individual' ? first + last : document.getElementById('businessName').value,
        email: document.getElementById('username').value,
         }
        })
      navigate('/confirm/' + document.getElementById('username').value)
    }
    catch (err) {
      setErrorMessage(err.message);
    }
  }
  
  return (
    <div className="container">
      <div className="card">
        {userType === null ?
          (
            <div>
              <h1 style={{marginBottom: '40px'}}>Account Type</h1>
              <button onClick={() => setUserType('individual')}>Individual</button>
              <button onClick={() => setUserType('business')} style={{marginTop: '20px', backgroundColor: colors.primaryColor}}>Registered Business</button>
            </div>
          )
          :
          (
            <>
              <AuthHeader/>
                {userType === 'individual' ? (
              <div style={styles.nameContainer}>
                 <input id={'first'} style={styles.nameInput} placeholder={'Connor'} />
                <input id={'last'} style={styles.nameInput} placeholder={'Evans'} />
              </div>
                  
                ) : <input id={'businessName'} style={styles.nameInput} placeholder={'TheLibrary, LLC'}/>} 
              <input id={'username'} placeholder={'email'} />
              <input id={'password'} placeholder={'password'} type={'password'} />
              <button id={'signUp'} onClick={() => handleSignUp()}>Create Account</button>
              <p style={{color: colors.errorColor}}>{errorMessage && errorMessage}</p>
              <p className='link' id={'navLogin'} onClick={() => navigate('/login')}>Back to Sign In</p>
            </>
          )
        }
      </div>
    </div>

  )
}

const styles = {
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    width: '49%'
  }
}

export default SignUp