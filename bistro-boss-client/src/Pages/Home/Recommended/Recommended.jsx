import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import RecommendedCart from './RecommendedCart';
import cardimg from "../../../assets/home/04.jpg"

const Recommended = () => {
    return (
        <div>
            <SectionTitle heading="Should Try" subheading="Chef Recommends"></SectionTitle>
            <div className='grid md:grid-cols-3 gap-5'>
            <RecommendedCart img={cardimg} title={"Ceaser Salad"} element="Letus, Egg, Chicken, Chili , Fry" btn={"Add to cart"}></RecommendedCart>
            <RecommendedCart img={cardimg} title={"Ceaser Salad"} element="Letus, Egg, Chicken, Chili , Fry" btn={"Add to cart"}></RecommendedCart>
            <RecommendedCart img={cardimg} title={"Ceaser Salad"} element="Letus, Egg, Chicken, Chili , Fry" btn={"Add to cart"}></RecommendedCart>
            </div>
        </div>
    );
};

export default Recommended;