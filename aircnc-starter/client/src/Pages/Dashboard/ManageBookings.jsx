import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getBookings, getBookingsHost } from "../../api/bookings";
import { toast } from "react-hot-toast";
import TableRow from "../../components/Dashboard/TableRow";
import Loader from "../../components/Shared/Loader/Loader";
import EmptyState from "../../components/Shared/EmptyState";

const ManageBookings = () => {
  const [hostBookings, setHostBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const fetchBookings = () => {
    setLoading(true);
    getBookingsHost(user?.email)
      .then((data) => {
        // console.log(data);
        setHostBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchBookings();
  }, [user]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      {hostBookings &&
      Array.isArray(hostBookings) &&
      hostBookings.length > 0 ? (
        <>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          From
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          To
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hostBookings &&
                        hostBookings.map((booking) => (
                          <TableRow
                            key={booking._id}
                            booking={booking}
                            fetchBookings={fetchBookings}
                          ></TableRow>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <EmptyState
            message="No Booking Data available"
            address={"/"}
            label="Go Back"
          ></EmptyState>
        </>
      )}
    </>
  );
};

export default ManageBookings;
