import React, { useState } from "react";
import "./SocialLoginBtn.css";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";

const auth = getAuth(app);

const SocialLoginBtn = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogIn = () =>{
        // Handle google signin
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedUser = result.user;
            toast.success('sign in successfull');
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleGithubAuthProvider = () =>{

    }

return (
    <div className=" social-button-container w-100 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogIn}
          className=" social-button"
          src="/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
        onClick={handleGithubAuthProvider}
          className=" social-button"
          src="github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;