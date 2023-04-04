import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';


const PostDetail = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    // console.log(data);
    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Details about your post.</h1>
            <h1 className='text-5xl font-extrabold'>{data.id}</h1>
            <h1>{data.title}</h1>
            <h1>{data.body}</h1>
            <button className='btn btn-danger' onClick={handleGoBack}>Previous Page</button>
        </div>
    );
};

export default PostDetail;