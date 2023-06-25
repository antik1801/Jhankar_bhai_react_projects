import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getHostRooms } from "../../api/rooms";
import { toast } from "react-hot-toast";
import RoomDataRow from "../../resources/components/Dashboard/RoomDataRow";
import EmptyState from "../../components/Shared/EmptyState";
import Loader from "../../components/Shared/Loader/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {
  useQuery,
} from '@tanstack/react-query'

const MyListings = () => {
  const [listings, setListings] = useState([]);
  const [axiosSecure] = useAxiosSecure()
  const { user,loading } = useAuth();

  const {data: hostrooms = [], refetch } = useQuery({ 
    queryKey: ['hostrooms', user?.email],
    enabled: !loading,
    queryFn: async () =>{
      const res = await axiosSecure.get(`/hostrooms/${user?.email}`)
      return res.data
    } 
  })

  return (
    <>
      {hostrooms && Array.isArray(hostrooms) && hostrooms.length > 0 ? (
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
                          Delete
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Update
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hostrooms.map((room) => (
                        <RoomDataRow
                          key={room._id}
                          room={room}
                          refetch={refetch}
                        ></RoomDataRow>
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
            message="You haven't added any room yet"
            address={"/dashboard/add-room"}
            label="add room"
          ></EmptyState>
        </>
      )}
    </>
  );
};

export default MyListings;
