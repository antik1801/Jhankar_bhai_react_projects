import React, { useEffect, useState } from 'react';
import MainContainer from '../MainContainer/MainContainer';
import axios from 'axios';

const HomeContainer = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        axios.get('player.json')
        .then(res => setDatas(res));
    },[])
   
    console.log(datas);
    return (
        <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-2'>
            <div>{
            

            }</div>
            {/* <MainContainer data={datas? datas : []}></MainContainer> */}
        </div>
    );
};

export default HomeContainer;