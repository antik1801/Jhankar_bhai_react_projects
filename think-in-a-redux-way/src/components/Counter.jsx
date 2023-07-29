import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = ({id,increment, decrement,count}) => {
    

  return (
    <>
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
       <Count count={count} />
        <div className="flex space-x-3">
         <Button handler={()=>increment(id)} label="Increment" ></Button>
         <Button handler={()=>decrement(id)} label="Decrement"></Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
