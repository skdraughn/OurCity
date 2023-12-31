import { Auth, Hub } from "aws-amplify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import AuthHeader from "../auth/AuthHeader";

const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //     checkCurrentUser() //when page loads/refreshes, checks to see if the user is authenticated if not navigates to login
  //     createAuthListener() //creates an "event listener" that switches the form back to sign in if amplify ever tells us the user logs out

  //     // eslint-disable-next-line
  //   }, [])

  //   //implemetation of functions described above
  //   const checkCurrentUser = async () => {
  //     try {
  //       await Auth.currentAuthenticatedUser()
  //     }
  //     catch (err) {
  //         console.log(err)
  //         navigate('/login') //if there is an error, such as "user is not authenticated", navigate to login
  //     }
  //   }

  //   const createAuthListener = async () => {
  //     //this .listen is very similar to a useEffect, first parameter is like the [] and second parameter is a function that fires when the event you specified happens
  //     Hub.listen('auth', (data) => {
  //       switch (data.payload.event) {
  //         case 'signOut':
  //           navigate('/login')
  //           console.log(data)
  //           break
  //         default:
  //           break
  //     }})
  //   }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={require("../../assets/TheLibraryLogo.png")}
        style={{ height: 300, width: 300 }}
      ></img>
      <h2 style={{ color: "white" }}>OURCITY - App Store Pending</h2>
      <span style={{ color: "lightblue", textDecoration: 'underline' }} onClick={() => navigate("/legal")}>
        PRIVACY POLICY
      </span>
    </div>
  );
};

export default Home;
