import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const setPictureAndName = (userName, userImage) =>{
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userImage,
        })
    }
    const emailUpdate = (user,newEmail) =>{
        return updateEmail(user,newEmail);
    }
    const varifyMail = user =>{
        return sendEmailVerification(user)
    }
    const passwordUpdate = (user,newPassword) =>{
        return updatePassword(user,newPassword);
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }
    const removeUser = user =>{
        return deleteUser(user);
    }
    const logout = () =>{
        return signOut(auth);
    }
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // JWT
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data => {
                    console.log(data.data?.token)
                    localStorage.setItem('access-token', data.data?.token)
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false);
            console.log('Current User', currentUser);
        })
        return ()=>{ 
           return unsubscribed();
        } 
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        setPictureAndName,
        emailUpdate,
        varifyMail,
        passwordUpdate,
        googleLogin,
        logout,
        removeUser,
        resetPassword
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;