import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from '../utils/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const userUpdate = (user,name,photo) =>{
        return updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
    }
    useEffect(()=>{
        const unsubscribed =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(user)
        })
        // stop observing while unmounting
        return  () =>{
            return unsubscribed();
        }
    },[])
    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        loading,
        googleLogin,
        userUpdate
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;