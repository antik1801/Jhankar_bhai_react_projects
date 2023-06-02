import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '../Shared/Container/Container';
import Card from './Card';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';
import { getAllRooms } from '../../api/rooms';

const Rooms = () => {
    const [params,setParams] = useSearchParams();
    const category = params.get('category');
    const [rooms,setRooms] = useState([])
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        getAllRooms()
        .then(data=>{
            if (category) {
                const filtered = data.filter(room=> room.category == category)
                setRooms(filtered);
                setLoading(false)
            }
            else{
            setRooms(data);
            setLoading(false);
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
    },[category])
    if (loading) {
        return <Loader></Loader>
      }
    return (
        <Container>
            {rooms && rooms.length>0 ?      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {
                    rooms.map((room,index)=> <Card key={index} room={room}></Card> )
                }
            </div>
            :
            <div className='pt-12'>
                <Heading title="No Rooms Available In This Category" subtitle='Please Select Other Categories' center={true}></Heading>
            </div>
            }
        </Container>
    );
};

export default Rooms;