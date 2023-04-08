import React, { useEffect, useState } from 'react';
import "./MainContainer.css"
import NewsContainer from '../NewsContainer/NewsContainer';
import SideContainer from '../SideContainer/SideContainer';

const MainContainer = () => {
    const [newses,setNewses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setNewses(data));
    },[])
    // console.log(newses);
    return (
        <div className='main-container mt-24'>
            <div>
                {
                    newses.map(news=><NewsContainer key={news._id} news={news}></NewsContainer>)
                }
            </div>
            <SideContainer></SideContainer>
        </div>
    );
};

export default MainContainer;