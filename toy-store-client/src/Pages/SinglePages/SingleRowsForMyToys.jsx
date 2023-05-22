import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleRowsForMyToys = ({ toy , handleControll}) => {
  const handleRemove = () => {
    console.log(toy._id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-store-server-ashy.vercel.app/removeToy/${toy._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              handleControll();
            }
          });
        
      }
    })
   
  };
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
      <td>{toy.sellerName}</td>
      <td>{toy.sellerEmail}</td>
      <td>{toy.category ? toy.category : "null"}</td>
      <td>{toy.subCategory}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <th>
        <Link to={`/editToy/${toy._id}`}>
          <button className="btn btn-primary btn-xs me-2">Edit</button>
        </Link>
        <button className="btn btn-danger btn-xs" onClick={handleRemove}>
          Delate
        </button>
      </th>
    </tr>
  );
};

export default SingleRowsForMyToys;
