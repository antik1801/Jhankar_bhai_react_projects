import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Valvuna Bali"
        subtitle="Sideman, Indonesia"
        center={false}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg"
          alt="Room pic"
          className="object-cover w-full"
        />
      </div>
    </>
  );
};

export default Header;
