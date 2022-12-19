import { useNavigate, useParams } from "react-router-dom";
import { Auth } from "aws-amplify";

const ResetPassword = () => {
    const navigate = useNavigate()
    const { username } = useParams()

    const handleReset = async () => {
        Auth.forgotPasswordSubmit(username, document.getElementById('authCode').value, document.getElementById('password').value)
        console.log('placeholder for reset password function')
            .then((data) => {
                console.log(data)
                navigate('/login')
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Reset Password</h1>
                <input id={'authCode'} placeholder={'code'} />
                <input id={'password'} placeholder={'password'} type={'password'} />
                <button id={'reset'} onClick={handleReset}>Reset</button>

            </div>
        </div>
    )
}

export default ResetPassword