import React, {createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const user = { displayName: "Muri Khan" };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () =>{
    return signOut(auth);
  }

  const updateInfo = (user,name,photo) =>{
    return updateProfile(user, {
        displayName: name,
        photoURL: photo,
    })
  }
  const sendVarificationMail = user =>{
    return sendEmailVerification(user);
  }

  const passwordReset = email =>{
    return sendPasswordResetEmail(auth, email);
  }

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    updateInfo,
    sendVarificationMail,
    passwordReset,


  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;