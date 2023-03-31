import React from "react";
import "./PostContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const PostContainer = (props) => {
  const { news , handleMarkAsRead, handleBookMark} = props;
  const { title, publishedAt, content, author, source, urlToImage, authorDp ,tags, readTime} = news;
//   console.log(news);
    
  return (
    <div className="mt-5 card pb-5">
      <div className="">
        <img className="img-fluid" src={urlToImage} alt="" />
      </div>
      <div className="px-2">
      <div className="person-info-and-time-to-read mt-5 d-flex justify-content-between">
        <div className="d-flex">
          <div className="profile-pic">
            <img className="img-fluid dp" src={authorDp} alt="" />
          </div>
          <div className="info">
            <h3>{author ? author : "john Doe"}</h3>
            <p>{publishedAt ? publishedAt: "Date not found"}</p>
          </div>
        </div>
        <div>
          <p className="fw-bold pe-3">{readTime} mins to read <FontAwesomeIcon className="bookmark-icon mx-4" icon={faBookmark}  onClick={()=>handleBookMark(news)}/></p>
        </div>
      </div>
        <h3 className="title">{title}</h3>
        <div >
            {
                tags.map((tag,index)=><span className="me-2" key={index}>#{tag}</span>)
            }
        </div>
        <button className="mt-5 btn btn-primary" onClick={()=>handleMarkAsRead(props.news)}>Mark as read</button>
      </div>
    </div>
  );
};

export default PostContainer;
