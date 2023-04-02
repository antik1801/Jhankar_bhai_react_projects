import React from "react";

const Link = (props) => {
  const { route } = props;
//   console.log(route);
  return (
    <div className="cursor-pointer">
      <li>
        <a href={route.path} >
          {route.name}
        </a>
      </li>
    </div>
  );
};

export default Link;
