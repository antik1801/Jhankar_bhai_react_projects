import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item=> item.category === 'popular');
  return (
    <section className="mb-20">
      <SectionTitle
        heading="From Our Menu"
        subheading="Check it Out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-outline border-0 border-b-4 mt-3">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
