import React from 'react';
import Time from '../Time/Time';
import "./SideContainer.css"
import AllBlogs from '../AllBlogs/AllBlogs';

const SideContainer = (props) => {
    const {posts,bookMark} = props;
    // console.log(props);
    let time = 0;
    for (const post of posts) {
       time = time + post.readTime;
    }
   
    return (
        <div className='sidebar'>
            <Time time={time}></Time>
            <AllBlogs bookMark={bookMark}></AllBlogs>
        </div>
    );
};

export default SideContainer;