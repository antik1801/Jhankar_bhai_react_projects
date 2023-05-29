import React from "react";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
//   console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <div className="uppercase font-semibold flex justify-between h-10">
        <h3 className="text-3xl">Total items : {cart.length}</h3>
        <h3 className="text-3xl">Total price : $ {total}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      {/* Table */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((row,index)=> 
                    <tr key={row._id}>
                    <th>
                      {index+1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">United States</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <td>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </td>
                  </tr>
                    )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
