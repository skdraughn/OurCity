import { Auth } from "aws-amplify"
import { useNavigate, useParams } from "react-router-dom"

const ConfirmSignUp = () => {
  const { username } = useParams()
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      // await Auth.confirmSignUp(username, document.getElementById('authCode').value)
      navigate('/login')
    }
    catch (err) {
      console.log(err)
    }
  }

  //resend onClick={() => { Auth.resendSignUp(username) }}
  return (
    <div className="container">
      <div className="card">
        <h1>Confirm Email</h1>
        <input id={'authCode'} placeholder={'code'} />
        <button id={'confirm'} onClick={handleConfirm}>Confirm</button>
        <button id={'resend'} >Resend code</button>

      </div>
    </div>
  )
}

export default ConfirmSignUp