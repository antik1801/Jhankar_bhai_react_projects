import React, { useState } from "react";
import "./SocialLoginBtn.css";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const SocialLoginBtn = () => {
  const [user,setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const handleGithubAuthProvider = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const githubUser = result.user;
      console.log(githubUser); 
    })
    .catch(error =>{
      const errorMessage = error.message;
    })
  }


  const handleGoogleLogIn = () =>{
    signInWithPopup(auth,googleProvider)
    .then(result => {
      const googleUser = result.user;
      setUser(googleUser);
      })
    .catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }
  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogIn}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
        onClick={handleGithubAuthProvider}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
