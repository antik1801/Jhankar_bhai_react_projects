import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = ({post}) => {
    // console.log(post);
    const {title,body,id} = post;
    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='mt-5 border-2 border-amber-800 p-5 rounded-3xl'>
            <p className='text-2xl'>ID: {id}</p>
            <h1 className=' font-semibold'>Title: {title}</h1>
            <p>Body: {body}</p>
            <Link to={`/post/${id}`}><button className="btn btn-active btn-neutal">Show More</button></Link>
            <button className='btn btn-success ml-4 mt-5' onClick={handleNavigation}>use navigate</button>
        </div>
    );
};

export default SinglePost;