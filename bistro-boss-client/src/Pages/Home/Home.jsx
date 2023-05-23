import Banner from "./Bannar/Banner";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
        </div>
    );
};

export default Home;