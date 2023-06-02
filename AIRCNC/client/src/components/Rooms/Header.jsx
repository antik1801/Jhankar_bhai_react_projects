import React from "react";
import Heading from "../Heading/Heading";

const Header = ({roomData}) => {
  return (
    <>
      <Heading
        title={roomData.title}
        subtitle={roomData.location}
        center={false}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          src={roomData.image}
          alt="Room pic"
          className="object-cover w-full"
        />
      </div>
    </>
  );
};

export default Header;
