import React from "react";

const ContainerCards = ({cardItem}) => {
    const {img,title,description} = cardItem
  return (
        <div className="col">
          <div className="card h-100">
            {
                img ? <img src={img} className="card-img-top" alt="..." /> : <h3 className="text-center">Image not available</h3>
            }
            <div className="card-body">
              <h5 className="card-title">{title ? title.length > 15 ? title.slice(0,15) : title : <h3 className="text-center">Title not available</h3> }</h5>
              <p className="card-text">
                {description? description.length > 150 ? description.slice(0,150) : description : <h3 className="text-center">Description not available</h3> }
              </p>
            </div>
          </div>
        </div>
  );
};

export default ContainerCards;
