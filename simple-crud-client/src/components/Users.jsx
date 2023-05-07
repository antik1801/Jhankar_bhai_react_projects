import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDeleteUser = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
          const remaining = users.filter((user) => user._id !== id);
        //   console.log(remaining);
          setUsers(remaining);
        }
      });
  };
//   console.log(users);
  return (
    <div>
      <Link to={"/"}>
        <button>home</button>
      </Link>
      <h2>{loadedUsers.length}</h2>
      <div>
        {loadedUsers.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} {user._id}{" "}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
