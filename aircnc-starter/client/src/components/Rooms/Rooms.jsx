import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import RoomsCard from "./RoomsCard";
import Loader from "../Shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const Rooms = () => {
  const [params,setParams] = useSearchParams()
  const category = params.get('category')
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Container>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {rooms.map((room, index) => (
          <RoomsCard room={room} key={index}></RoomsCard>
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
