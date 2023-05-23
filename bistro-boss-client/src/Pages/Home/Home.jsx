import Banner from "./Bannar/Banner";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <Category></Category>
            <Hero></Hero>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;