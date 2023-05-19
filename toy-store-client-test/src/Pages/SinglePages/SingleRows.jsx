import React from "react";

const SingleRows = ({toy}) => {
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{toy.name}</div>
          </div>
        </div>
      </td>
      <td>
        {toy.sellerName}
      </td>
      <td>{toy.sellerEmail}</td>
      <td>{toy.subCategory}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default SingleRows;
