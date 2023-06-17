import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import RoomsCard from './RoomsCard';
import Loader from '../Shared/Loader/Loader';

const Rooms = () => {
    const [rooms,setRooms] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('rooms.json')
        .then(res=>res.json())
        .then(data=>{
            setRooms(data)
            setLoading(false)
        })
        .catch(error=>{
            console.log(error.message)
        })
    },[])
    if (loading) {
        return <Loader></Loader>
    }
    return (
        <Container>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {
                    rooms.map((room,index)=> <RoomsCard key={index}>{room.location}</RoomsCard>)
                }
            </div>
        </Container>
    );
};

export default Rooms;