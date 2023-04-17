import React from "react";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <React.Fragment>
      <div className="bg-[#1A1919]">
        <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center px-[80px] lg:px-[150px] pt-[70px] lg:pt-[130px] pb-[80px] lg:pb-[180px] text-gray-300 font-mono text-center">
          <div className="flex flex-col items-center justify-center gap-[20px]">
            <h1 className="text-[32px] font-[800] ">Carrer Hub</h1>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex  justify-between items-center gap-[20px]">
              <img
                src="/Group1.png"
                alt=""
                className="bg-white rounded-full p-[11px]"
              />
              <img
                src="/Vector.png"
                alt=""
                className="bg-white rounded-full p-[11px]"
              />
              <img
                src="/Group.png"
                alt=""
                className="bg-white rounded-full p-[11px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between font-manrope">
            <Link to={"/about"}>
              <h1>Company</h1>
            </Link>
            <Link to={"/about"}>
              <h1>About Us</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Work</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Latest News</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Careers</h1>
            </Link>
          </div>
          <div className="flex flex-col justify-between font-manrope">
            <Link to={"/about"}>
              <h1>Product</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Prototype</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Place & Pricing</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Customers</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Intigrations</h1>
            </Link>
          </div>
          <div className="flex flex-col justify-between font-manrope">
            <Link to={"/about"}>
              <h1>Support</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Help Desk</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Sales</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Become a Partner</h1>
            </Link>
            <Link to={"/about"}>
              <h1>Developer</h1>
            </Link>
          </div>
          <div className="flex flex-col  font-manrope">
            <Link to={"/about"}>
              <h1 className="mb-[10px]">Contact</h1>
            </Link>
              <h1 className="mb-[10px]">524 Broadway , NYC</h1>
              <h1 className="mb-[10px]">+1 777 - 978 - 5570</h1>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default MyFooter;
