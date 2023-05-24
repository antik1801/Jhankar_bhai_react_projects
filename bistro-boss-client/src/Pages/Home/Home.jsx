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
        <div className="space-y-20">
            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
            <PopularMenu></PopularMenu>
            <div className="text-center">
            <Button details="View full menu"></Button>
            </div>
            <CallUs number="88-01869694519"></CallUs>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;