import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings,setState] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data => setState(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Bookings;