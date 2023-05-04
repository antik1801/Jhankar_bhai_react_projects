import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useEffect, useState } from 'react';
import PhoneVerify from './PhoneVerify';

const RouteLink = () => {
    const [current, setCurrent] = useState(null);
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(firebase.auth(),(currentUser)=>{
            setCurrent(currentUser)
        })
        return ()=>unSubscriber();
    },[])
    return (
        <div>
            <PhoneVerify auth={firebase.auth()}></PhoneVerify>
        </div>
    );
};

export default RouteLink;