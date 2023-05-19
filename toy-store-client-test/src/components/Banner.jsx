import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CSS/Banner.css"

// import required modules
import { Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="bannerSlider"><img src="anime.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="bannerSlider"><img src="barbie.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="bannerSlider"><img src="hot-wheels.jpg" alt=""/></SwiperSlide>
        <SwiperSlide className="bannerSlider"><img src="lego.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className="bannerSlider"><img src="marvel.jpeg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
Banner;
