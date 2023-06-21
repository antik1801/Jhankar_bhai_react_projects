import { NavLink, useNavigate } from "react-router-dom";
import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { becomeHost } from "../../api/auth";
import { toast } from "react-hot-toast";
import HostModal from "../Modals/HostModal";
const GuestMenu = () => {
  const { user, role, setRole } = useAuth();
  const [modal,setModal] = useState(false)
  const navigate = useNavigate()
  const modalHandler = email =>{
    becomeHost(email)
    .then(data=>{
      console.log(data)
        setRole('host')
        navigate('/dashboard/add-room')
        toast.success('You are host now, Post Rooms!')
        closeModal()
    })
  }
  const closeModal = () =>{
    setModal(false)
  }
  // console.log(role);
  return (
    <>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsFingerprint className="w-5 h-5" />

        <span className="mx-4 font-medium">My Bookings</span>
      </NavLink>

      {role !== 'host'&& (
        <div onClick={()=>setModal(true)} className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer">
          <GrUserAdmin className="w-5 h-5" />
          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal closeModal={closeModal} modalHandler={modalHandler} email={user?.email} isOpen={modal}></HostModal>
    </>
  );
};

export default GuestMenu;
