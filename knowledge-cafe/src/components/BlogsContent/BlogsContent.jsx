import React from 'react';
import "./BlogContent.css"
const BlogsContent = (props) => {
    const{post,bookMark} = props;
    // console.log(post);
    // console.log(bookMark);
    const veri =  bookMark.find(book=>
        {
         if(book.source.id !== post.source.id){
            const showToastMessage = () => {
                toast.success("The item is already exist", {
                    position: toast.POSITION.TOP_RIGHT
                });
            };
         }
        })
    // console.log(veri);
    return (
        <div className='card mx-1 my-1'>
            <p>{post.title}</p>
        </div>
    );
};

export default BlogsContent;