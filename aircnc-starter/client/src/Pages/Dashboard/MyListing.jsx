import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { getHostRooms } from "../../api/rooms"
import { toast } from "react-hot-toast"
import RoomDataRow from "../../resources/components/Dashboard/RoomDataRow"

const MyListings = () => {
  const [listings,setListings] = useState([])
  const [loading,setLoading] = useState(false)
  const {user} = useAuth()
  const fetchListingsRooms = () =>{
    setLoading(true)
    getHostRooms(user?.email)
    .then(data=>{
      setListings(data)
      setLoading(false)
    })
    .catch(error=>{
      console.log(error.message)
      toast.error(error.message)
      setLoading(false)
    })
  }
  useEffect(()=>{
    fetchListingsRooms()
  },[user])
    return (
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listings.map(room=> <RoomDataRow key={room._id} room={room} fetchListingsRooms={fetchListingsRooms} loading={loading} setLoading={setLoading}></RoomDataRow> )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default MyListings
  