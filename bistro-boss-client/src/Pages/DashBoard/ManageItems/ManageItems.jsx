import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, ,refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure()
  const handleDelete = (item) => {
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
       
        axiosSecure.delete(`/menu/${item._id}`)
        .then(res =>{
            console.log('deleted response',res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            refetch();
        })
            
         
      }
    });
  };


   

  return (
    <div className="w-full ">
      <SectionTitle
        heading="Manage All Items"
        subheading="Hurry Up"
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th>#</th>
              <th>Image Item</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                menu.map((item, index) => <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{item.name}</div>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-ghost bg-[#D1A054] text-white">
                        {" "}
                        <FaEdit size={25}/>{" "}
                      </button>
                    </td>
                    <th>
                      <button className="btn btn-ghost bg-[#B91C1C] text-white" onClick={() => handleDelete(item)}>
                        {" "}
                        <FaTrash size={25} />
                      </button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
