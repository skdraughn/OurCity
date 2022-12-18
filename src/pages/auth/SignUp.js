import { useNavigate } from "react-router-dom"
import { Auth } from "aws-amplify"
import { useState } from "react"

const SignUp = () => {
  const [userType, setUserType] = useState(null)
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      const first = document.getElementById('first').value
      const last = document.getElementById('last').value
      // await Auth.signUp({ username: document.getElementById('username').value, password: document.getElementById('password').value})
      navigate('/confirm/' + document.getElementById('username').value)
    }
    catch (err) {
      console.log(err)
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
              <button onClick={() => setUserType('business')} style={{marginTop: '20px', backgroundColor: '#1f1f1f'}}>Registered Business</button>
            </div>
          )
          :
          (
            <>
              <h1>Sign Up</h1>
              <div style={styles.nameContainer}>
                <input id={'first'} style={styles.nameInput} placeholder={'John'} />
                <input id={'last'} style={styles.nameInput} placeholder={'Doe'} />
              </div>
              <input id={'username'} placeholder={'email'} />
              <input id={'password'} placeholder={'password'} type={'password'} />
              <button id={'signUp'} onClick={handleSignUp}>Create Account</button>
              {/* <button id={'navSignIn'} onClick={() => { navigate('/login') }}>Sign In</button> */}
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