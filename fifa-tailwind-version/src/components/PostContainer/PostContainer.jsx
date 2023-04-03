import React from 'react';

const PostContainer = (props) => {
    const {data} = props;
    return (
        <div className='card'>
            <img src={data.picture} alt="" />
        </div>
    );
};

export default PostContainer;