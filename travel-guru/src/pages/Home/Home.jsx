import React, { useEffect, useState } from 'react';
import GridRight from '../../components/gridRight/GridRight';
import { Link, useLoaderData } from 'react-router-dom';
import GridLeft from '../../components/gridLeft/GridLeft';
import Button from '../../components/Button';

const Home = () => {
  
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-container'>
            <div className="font-bebus">
               <GridLeft></GridLeft>
               <Link to={"/booking"}> <Button>Booking</Button> </Link>
            </div>
            <div>
                <GridRight></GridRight>
            </div>
        </div>
    );
};

export default Home;