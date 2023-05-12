import React from "react";

const BookingRow = ({ booking }) => {
  console.log(booking);
  const { img ,customerName,email,data,service,price} = booking;
  return (
    
      <tr>
        <th></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                    src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          {customerName}
        </td>
        <td>{email}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

  );
};

export default BookingRow;
