import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    
    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribed();
        }

    },[])
    const authInfo = {
        createUser,
        logInWithEmailAndPassword,
        logOut,
        user,
        loading,
        googleLogin,
        githubLogin,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;