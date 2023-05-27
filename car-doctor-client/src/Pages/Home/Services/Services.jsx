import React, { useEffect, useRef, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "dsc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc,search]);

  const handleSearch = () =>{
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value)
  }

  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-orange-600">Our services</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words <br /> which don{"'"}t look even slightly
          believable.{" "}
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              ref={searchRef}
              className="input input-bordered"
            />
            <button className="btn btn-square"  onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setAsc(!asc)}>
          {asc ? "Price Hight to low" : "Price Low to High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
