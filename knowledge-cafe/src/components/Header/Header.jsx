import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <h3 className="fw-bold fs-2">Knowledge Cafe</h3> 
          </a>
            <div className="profile-pic">
            <img className="img-fluid" src={"ellipse.png"} alt="" />
            </div>
        </div>
      </nav>
      <hr  className="mt-2"/>
    </div>
  );
};

export default Header;
