import React from 'react';
import BlogsContent from '../BlogsContent/BlogsContent';

const AllBlogs = (props) => {
    const {bookMark} = props;
    // console.log(bookMark);
    return (
        <div className='text-center card'>
            {/* <h4>Total Blogs: {bookMark.length}</h4> */}
            {
                bookMark.map((post,index)=><BlogsContent post={post} key={index} bookMark={bookMark}></BlogsContent>)
            }
            
        </div>
    );
};

export default AllBlogs;