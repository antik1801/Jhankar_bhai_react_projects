import React, { useEffect, useState } from 'react';
import MainContainer from '../MainContainer/MainContainer';
import axios from 'axios';

const HomeContainer = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch("player.json")
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    // console.log(datas);
    return (
        <div className='grid grid-col-1 md:grid-col-2 lg:grid-cols-2'>
            <MainContainer datas={datas}></MainContainer>
        </div>
    );
};

export default HomeContainer;