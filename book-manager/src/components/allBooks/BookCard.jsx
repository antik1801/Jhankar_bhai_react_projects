import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  const {_id,authorName, imageURL,bookName, price, rating} = book
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={imageURL}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{bookName}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <Link to="details/34" className="text-decoration-none btn btn-primary">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
