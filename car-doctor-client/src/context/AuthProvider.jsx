import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log('Current User',currentUser)
        })
        return ()=>{
            unsubscriber()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        googleSignIn,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;