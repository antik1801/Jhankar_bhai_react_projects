import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProviders = new GoogleAuthProvider();
const githubProviders = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const updateInfo = (user, name, photo) => {
    setLoading(false);
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googleSignIn = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProviders);
  };
  const githubSignIn = () => {
    setLoading(false);
    return signInWithPopup(auth, githubProviders);
  };
  const sendVarificationMail = (user) => {
    return sendEmailVerification(user);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
    })
    return () => {
      unsubscriber();
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    updateInfo,
    sendVarificationMail,
    passwordReset,
    loading,
    googleSignIn,
    githubSignIn,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
