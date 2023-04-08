import React from "react";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import Brother from "../Brother/Brother";

const Father = ({ring}) => {
  return (
    <div>
      <h1>Father</h1>
      <section className="A-flex">
        <Myself ring={ring}></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Father;
