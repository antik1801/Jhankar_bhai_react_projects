import React from 'react';
import PostContainer from '../PostContainer/PostContainer';

const MainContainer = (props) => {
    const {datas} = props;
    return (
        <div className='card w-3/4'>
            {
                datas.length? datas.map(data=><PostContainer key={data._id} data={data}></PostContainer>) : "" 
            }
        </div>
    );
};

export default MainContainer;