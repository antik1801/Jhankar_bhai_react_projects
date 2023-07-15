import React from 'react';
import ContainerCards from '../components/ContainerCards';
import ContainerTitle from '../components/ContainerTitle';
import cardContent from '../utils/cardContent';

const Main = () => {
    
    return (
        <div className='container'>
            <ContainerTitle title={"Card Manager"}></ContainerTitle>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                {
                    cardContent.map((cardItem,index)=><ContainerCards key={index} cardItem={cardItem}></ContainerCards>)
                }
            </div>
        </div>
    );
};

export default Main;