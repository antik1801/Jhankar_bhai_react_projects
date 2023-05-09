import React from "react";
import { Link } from "react-router-dom";

const ChocolateCarts = ({chocolate,handleRender}) => {
    console.log(chocolate,handleRender);
    const{_id,name,country,category,photo} = chocolate;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>{country}</p>
        </td>
        <td>{category}</td>
        <th>
         <Link to={`/editChocolate/${_id}`}><button className="btn btn-success btn-xs">Edit</button></Link>
         <Link><button className="btn btn-danger btn-xs">Delete</button></Link>
        </th>
      </tr>
    </tbody>
  );
};

export default ChocolateCarts;
