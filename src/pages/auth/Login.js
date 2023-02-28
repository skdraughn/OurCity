import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await Auth.signIn(
        document.getElementById("username").value,
        document.getElementById("password").value
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <AuthHeader />
        <input id={"username"} placeholder={"email"} />
        <input id={"password"} placeholder={"password"} type={"password"} />
        <button id={"login"} onClick={handleLogin}>
          Login
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p>Don't have an account?</p>
          <p
            className="link"
            id={"navSignup"}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </p>
        </div>
        <p
          className="link"
          id={"navForgot"}
          onClick={() => {
            navigate("/forgot");
          }}
          style={{ marginTop: "-2.5%" }}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
