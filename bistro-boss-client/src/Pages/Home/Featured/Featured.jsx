import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import "./Featured.css"

const Featured = () => {
    const featuredText = <div className='space-y-3'>
    <p>{"Aug 20, 2029"}</p>
    <p className='uppercase'>Where can i get some?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis numquam amet optio nemo autem corporis ullam accusamus blanditiis nisi nihil, asperiores impedit eum, provident officiis a magnam reprehenderit modi at odio. Nobis ea possimus id quis, repellendus enim vero atque tenetur rem. Reprehenderit eligendi fuga veritatis beatae, tenetur dolore!</p>
    </div>
    return (
        <div className='featured-item text-white pt-10'>
            <SectionTitle heading={"From Our menu"} subheading={"Check it out"}></SectionTitle>
            <div className='md:flex justify-center items-center py-16 px-36 gap-10'>
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div>
                    {featuredText}
                    <button className="btn btn-outline mt-3">Order Now</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;