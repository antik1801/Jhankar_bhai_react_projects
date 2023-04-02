import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Features = (props) => {
  const { feature } = props;
  return (
    <div className="flex items-center ml-4">
         <CheckCircleIcon className="h-6 w-6 text-green-500 " /> 
      <p>{feature}</p>
    </div>
  );
};

export default Features;
