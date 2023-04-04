import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>All posts are here : {posts.length}</h1>
            {
                posts.map(post=> <SinglePost post={post} key={post.id}></SinglePost>)
            }
        </div>
    );
};

export default Posts;