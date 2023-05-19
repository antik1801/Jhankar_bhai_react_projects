/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Job = ({ job }) => {
  const {
    _id,
    title,
    salary,
    deadline,
    description,
    category,
    status,
    image,
    skills,
    vacancy,
  } = job || {};
  const handleApply = (id) => {
    console.log(id);
  };
  return (
    <>
    <div className="job col-md-12 col-sm-12 col-lg-6 ">
      <div className="row d-flex justify-content-center align-items-center single-card">
        <div className="col-md-4">
          <img
            className="w-100"
            src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="col-md-8 card-right">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="all-skils d-flex  flex-wrap justify-content-around align-items-center">
            {skills?.map((skill, index) => (
              <button key={index} className="bg-dark text-white p-1">
                {skill?.value}
              </button>
            ))}
          </div>
          <div className="card-footer text-start p-4 mt-3 d-flex justify-content-between ">
            <div className="div">salary: {salary} BDT</div>
            <div>Deadline: {deadline}</div>
          </div>
          <div className="d-flex justify-content-around">
            <p>vacancy:{vacancy}</p>
            <p>Category: {category}</p>
          </div>
          <div className="text-end">
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary"
              onClick={() => handleApply(_id)}
            >
              Apply <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Modals Open */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Job;
