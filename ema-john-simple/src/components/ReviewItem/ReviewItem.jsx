import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product , handleRemoveFromCart}) => {
  const { id, category, name, seller, price, quantity, img } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button className="btn-delete" onClick={()=>handleRemoveFromCart(id)}>
      <FontAwesomeIcon icon={faTrash} className="delete-icon"/>
      </button>
    </div>
  );
};

export default ReviewItem;
