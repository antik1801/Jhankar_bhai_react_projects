import useCart from "../../../hooks/useCart";
import { FaHome, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log("test",2+"2" - 1);
  //   console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  console.log("cart from mycart", cart);
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full mt-10">
      <div className="uppercase font-semibold flex justify-between h-10 gap-10">
        <h3 className="text-3xl">Total items : {cart.length}</h3>
        <h3 className="text-3xl">Total price : $ {total.toFixed(2)}</h3>
        {cart.length > 0 && (
          <Link to="/dashboard/payment">
            <button className="btn btn-warning btn-sm">Pay</button>
          </Link>
        )}
      </div>
      {/* Table */}

      <div className="overflow-x-auto w-full max-h-[70vh]">
        <table className="table w-full ">
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
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">$ {item.price}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrashAlt size={20} className="text-red-600" />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cart.length == 0 && (
          <NavLink to="/" className="text-center">
            <button className="btn btn-primary"> Add Item</button>
          </NavLink>
        ) }
      </div>
    </div>
  );
};

export default MyCart;
