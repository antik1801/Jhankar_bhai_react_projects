import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleDelete = user => {
    console.log(user)
  }
  const handleMakeAdmin = user => {
    Swal.fire({
        title: `sure you want to make ${user.name} admin?`,
        text: "You will remove him from admin anytime!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: ' Confirm! '
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/admin/${user._id}`,{
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data=> {
                refetch();
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        `${user.name} successfully updated to admin!`,
                        'success'
                      )
                }
            })
        }
      })
   
  }
  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>

      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {user.role === 'admin' ? <p className="text-green-400">Admin</p> : <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleMakeAdmin(user)}
                  >
                    <FaUserShield size={25} className="text-blue-600" />{" "}
                  </button> }
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(user)}
                  >
                    <FaTrashAlt size={20} className="text-red-600" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
