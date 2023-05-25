import SectionTitle from "../../../components/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import { FaComment } from "react-icons/fa";

const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    const [rating, setRating] = useState(0)

    useEffect(()=>{
        fetch('https://bistro-boss-server-chi.vercel.app/review')
        .then(res=>res.json())
        .then(data => {
            setReviews(data)
        })
    },[])
  return (
    <section className="mb-20">
      <SectionTitle
        heading="Testimonials"
        subheading="What Our Client Say"
      ></SectionTitle>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            reviews.map((review,index) => <SwiperSlide
            key={review._id}>
            <div className="m-24 flex flex-col justify-center items-center space-y-3">
            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly/>
            <FaComment className="text-5xl text-blue-400"/>
            <p className="text-center">{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
            </SwiperSlide>)
          }
        </Swiper>
    </section>
  );
};

export default Testimonials;
