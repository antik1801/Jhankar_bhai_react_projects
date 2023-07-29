import React from "react";

const Button = ({label, handler}) => {
  return (
    <button
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      onClick={() => handler}
    >
      {label}
    </button>
  );
};

export default Button;
