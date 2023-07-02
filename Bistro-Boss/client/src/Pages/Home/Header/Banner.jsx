import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import bg1 from "../../../assets/bojack-0.png"
import bg2 from "../../../assets/bojack-3.jpg"
import bg3 from "../../../assets/bojack-4.jpg"
import bg4 from "../../../assets/bojack-5.jpg"

const Banner = () => {

    return (
        <AwesomeSlider animation="cubeAnimation">
        <div data-src={bg1} />
        <div data-src={bg2} />
        <div data-src={bg3} />
        <div data-src={bg4} />
      </AwesomeSlider>
    );
};

export default Banner;