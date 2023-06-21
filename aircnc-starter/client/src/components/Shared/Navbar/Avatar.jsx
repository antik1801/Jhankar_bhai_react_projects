import React, { useContext } from 'react';
import placeholder from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <img src={user && user.photoURL ? user.photoURL : placeholder} alt="placeholder" referrerPolicy='no-referrer' height={30} width={30} className='rounded-full'/>
    );
};

export default Avatar;