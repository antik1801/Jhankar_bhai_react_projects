import React, { useState } from "react";
import DatePicker from "./Calender";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import BookingModal from "../Modals/BookingModal";
import { formatDistance } from "date-fns";
import { addBooking, updateStatus } from "../../api/bookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoomReservations = ({ roomData }) => {
  const { user, role } = useAuth();
  const navigate = useNavigate()
  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });
//   console.log(roomData.booked)
  // price calculations
  const totalPrice =
    parseFloat(
      formatDistance(new Date(roomData.to), new Date(roomData.from)).split(
        " "
      )[0]
    ) * parseFloat(roomData.price);

  const [isOpen, setIsOpen] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    guest: { name: user.displayName, email: user.email, image: user.photoURL },
    host: roomData.host.email,
    location: roomData.location,
    price: roomData.price,
    to: value.endDate,
    from: value.startDate,
    title: roomData.title,
    guests: roomData.total_guest,
    roomId: roomData._id,
    image: roomData.image,
  });
//   console.log(bookingInfo);
  const handleSelect = (ranges) => {
    setValue({ ...value });
  };
  const modalHandler = () => {
    addBooking(bookingInfo)
      .then((data) => {
        if (data.insertedId) {
          updateStatus(roomData._id, true).then((data) => {
            if(data.modifiedCount>0){
                toast.success("Bookings Confirmed");
                closeModal();
                navigate('/dashboard/my-bookings')
            }
          });
        }
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        closeModal();
      });
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {roomData.price}</div>
        <div className="font-light text-neutral-600 night">night</div>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <DatePicker handleSelect={handleSelect} value={value}></DatePicker>
      </div>
      <hr />
      <div className="p-4">
        <Button
          onClick={() => setIsOpen(true)}
          disabled={roomData.host.email === user.email || roomData.booked}
          label="Reserved"
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <BookingModal
        closeModal={closeModal}
        modalHandler={modalHandler}
        bookingInfo={bookingInfo}
        isOpen={isOpen}
      ></BookingModal>
    </div>
  );
};

export default RoomReservations;
