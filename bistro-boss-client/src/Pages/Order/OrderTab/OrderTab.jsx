import React from "react";
import FoodCard from "../../../components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items, img }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 space-y-6">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {items.map((item) => (
            <FoodCard key={item._id} item={item} img={img}></FoodCard>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
