import { useNavigate } from 'react-router-dom';
import './AuthHeader.css'

const AuthHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-header">
        <span className="title">The Library</span>
        <h3 onClick={() => {
          navigate("/legal")
        }}>Privacy Policy</h3>
    </div>
  );
}

export default AuthHeader;