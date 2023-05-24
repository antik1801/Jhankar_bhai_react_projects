import Button from "../../components/Button";
import CallUs from "../../components/CallUs";
import Banner from "./Bannar/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Hero from "./Hero/Hero";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recommended from "./Recommended/Recommended";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <title>Bistro - Home</title>
      <div className="mb-20">
      <Banner></Banner>
      </div>
      <div className="mb-20">
      <Category></Category>
      </div>
      <div className="mb-20">
      <Hero></Hero>
      </div>
      <div className="mb-20">
      <PopularMenu></PopularMenu>
      </div>
      <div className="mb-20">
      <CallUs number="88-01869694519"></CallUs>
      </div>
      <div className="mb-20">
      <Recommended></Recommended>
      </div>
      <div className="mb-20">
      <Featured></Featured>
      </div>
      <div className="mb-20">
      <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
