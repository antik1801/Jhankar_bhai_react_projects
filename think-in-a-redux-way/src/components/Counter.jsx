import React, { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0)
    const handleIncrement = () => setCount((pervCount)=>pervCount+1)
    const handleDecrement = () => setCount((pervCount)=>pervCount-1)
  return (
    <>
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={handleIncrement}>
            Increment
          </button>
          <button className="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
