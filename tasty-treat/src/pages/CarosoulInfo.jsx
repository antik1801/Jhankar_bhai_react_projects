import React from 'react';
import HeaderCarosoul from './HeaderCarosoul';

const CarosoulInfo = ({chefs}) => {
    return (
        <div>
           <HeaderCarosoul chefs={chefs}></HeaderCarosoul>
        </div>
    );
};

export default CarosoulInfo;