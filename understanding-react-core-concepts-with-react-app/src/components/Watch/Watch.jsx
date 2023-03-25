import React, { useEffect, useState } from "react";
import Dial from "../Dial/Dial";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const nextStep = steps+1;
    setSteps(nextStep);
    console.log(steps);
  };
  useEffect(()=>{
    console.log(steps);
  },[steps])

  return (
    <div style={{border: "2px solid red", margin: '10px'}}>
      <h1>This is my Smart Watch!</h1>
      <p>Steps: {steps}</p>
      <button onClick={increaseSteps}>De dour....</button>
      <Dial steps={steps}></Dial>
    </div>
  );
};

export default Watch;
