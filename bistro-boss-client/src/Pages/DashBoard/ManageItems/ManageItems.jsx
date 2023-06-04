import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div className="w-full">
      <SectionTitle
        heading="Manage All Items"
        subheading="Hurry Up"
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full max-h-[80vh]">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image Item</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">Hart Hagerty</div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>
                <button className="btn btn-ghost btn-sm ">
                  {" "}
                  <FaEdit size={25}/>{" "}
                </button>
              </td>
              <th>
                <button className="btn btn-ghost btn-sm">
                  {" "}
                  <FaTrash />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
