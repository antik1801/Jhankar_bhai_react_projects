import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import RoomsCard from "./RoomsCard";
import Loader from "../Shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [params,setParams] = useSearchParams()
  const category = params.get('category')
//   console.log(category)
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      getAllRooms()
      .then((data) => {
        if (category) { 
            const filteredData = data.filter(room=>room.category === category)
            setRooms(filteredData)
        }
        else setRooms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        
      });
  }, [category]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      {
        rooms && rooms.length>0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {rooms.map((room, index) => (
          <RoomsCard room={room} key={index}></RoomsCard>
        ))}
      </div> :
      <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
      <Heading title="No Rooms Available" center={true} subtitle="Please seect other data"></Heading>
      </div>
      }
    </Container>
  );
};

export default Rooms;
