import React, {createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  const updateInfo = (user,name,photo) =>{
    setLoading(true);
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

  useEffect(()=>{
    const unsubscriber = onAuthStateChanged(auth, loggedInUser =>{
        setUser(loggedInUser);
        setLoading(false);
    })
    return ()=>{
        unsubscriber();
    }
  },[])

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    updateInfo,
    sendVarificationMail,
    passwordReset,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
