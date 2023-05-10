import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ChocolateCarts = ({chocolate,handleRender}) => {
    const{_id,name,country,category,photo} = chocolate;
    const handleDeleteChocolate= id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/chocolates/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                      handleRender();
                  }
                });
            }
          })
    }
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
         <button className="btn btn-danger btn-xs" onClick={()=>{handleDeleteChocolate(_id)}}>Delete</button>
        </th>
      </tr>
    </tbody>
  );
};

export default ChocolateCarts;
