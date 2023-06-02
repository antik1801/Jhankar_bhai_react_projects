import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";
import { AuthContext } from "../../providers/AuthProvider";
import BookingModal from "../Modal/BookingModal";
import { formatDistance } from "date-fns";
import { addBookings, updateStatus } from "../../api/bookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReseration = ({ roomData }) => {
  const { user, role } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const total_price =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.from)).split(
        " "
      )[0]
    ) * parseFloat(roomData.price);

  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: roomData.host.mail,
    location: roomData.location,
    price: total_price,
    to: value.endDate,
    from: value.startDate,
    title: roomData.title,
  });
  const handleSelect = (ranges) => {
    setValue({ ...value });
  };
  const modalHandeler = () => {
    addBookings(bookingInfo)
    .then(data=>{
      toast.success('Booking room successful')
      updateStatus()
      console.log(data)
      closeModal();
    })
    .catch(error=>{
      closeModal();
      console.log(error.message)
    })
  };
  const closeModal= () =>{
    setIsOpen(false);
  }
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {roomData.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender value={value} handleSelect={handleSelect}></Calender>
      </div>

      <hr />
      <div className="p-4">
        {" "}
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData.host.email === user.email}
          label="Reserve"
        ></Button>{" "}
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {total_price}</div>
      </div>
      <BookingModal
        isOpen={isOpen}
        bookingInfo={bookingInfo}
        modalHandler={modalHandeler}
        closeModal={closeModal}
      ></BookingModal>
    </div>
  );
};

export default RoomReseration;
