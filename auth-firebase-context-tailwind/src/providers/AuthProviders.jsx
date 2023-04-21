import React, { useState, useEffect } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{ 
      return signOut(auth)
    }
    useEffect(()=>{
       const unSubscribed = onAuthStateChanged(auth, currentUser =>{
            console.log('On state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
       })
          
       return () =>{
        unSubscribed()
       }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;