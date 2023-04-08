import React from "react";

const NewsContainer = (props) => {
    const {news} = props;
    const {description,urlToImage} = news;
    console.log(news);
  return (
    <div>
     <img className="img-fluid w-2/5" src={urlToImage} alt="" />
    </div>
  );
};

export default NewsContainer;
