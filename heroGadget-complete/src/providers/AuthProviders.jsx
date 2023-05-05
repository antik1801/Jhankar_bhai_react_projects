import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

const auth = getAuth(app)
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () =>{
       return signInWithPopup(auth,githubProvider);
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const passReset = email =>{
        return sendPasswordResetEmail(auth,email)
    }

    const signIn = (email,password) =>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUsers = (user,name, displayPhoto) =>{
       return updateProfile(user, {
            displayName: name,
            photoURL: displayPhoto,
        })
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log('On auth state changed', currentUser)
            setUser(currentUser);
            setLoading(false);
        }
        )

        return ()=>{
            unsubscribed();
        }
    },[])
    const logOut = () =>{
        return signOut(auth)
    }

    const authinfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        passReset,
        loading,
        logOut,
        updateUsers,
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;