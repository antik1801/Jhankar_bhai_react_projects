import React from "react";
import NavBar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const HomePage = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
