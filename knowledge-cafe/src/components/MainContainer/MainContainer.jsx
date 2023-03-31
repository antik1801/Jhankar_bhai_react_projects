import React, { useEffect, useState } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import "./MainContainer.css"
import SideContainer from '../SideContainer/SideContainer';

const MainContainer = () => {
    const [newses,setNewses] = useState([]);
    const [posts,setPosts] = useState([]);
    const [bookMark,setBookMark] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setNewses(data));
    },[])
    const handleMarkAsRead = (post) =>{
        const newPosts = [...posts, post]
        setPosts(newPosts);
        // console.log(posts);
    }
    const handleBookMark = (_post) =>{
        const new__post = [...bookMark, _post];
        setBookMark(new__post);
        
    }
    return (
        <div className='container main-container '>
            <div className=''>
                {
                    newses.map(news=>
                    <PostContainer key={news.source.id} news={news} handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark}>
                    </PostContainer>
                )
                }
            </div>
            <div className=''>
                <SideContainer posts={posts} bookMark={bookMark}></SideContainer>
            </div>
        </div>
    );
};

export default MainContainer;