import React, { useState } from "react";

const Time = (props) => {
    const {time} = props;
  return (
    <div>
      <div className="mt-5 card text-center">
        <p className="fw-bold mt-2">Spend time on read: {time} min</p>
      </div>
    </div>
  );
};

export default Time;
