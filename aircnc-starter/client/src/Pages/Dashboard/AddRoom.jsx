import React, { useState } from "react";
import AddRoomForm from "../../components/forms/AddRoomForm";
import { imageUpload } from "../../utils/imgUpload";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { addRooms } from "../../api/rooms";

const AddRoom = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];
    // upload image
    const formData = new FormData();
    formData.append("image", image);
    const imgbb_api_url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(imgbb_api_url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then((imageData) => {
        const roomData = {
          location,
          title,
          price,
          total_guest,
          bedrooms,
          bathrooms,
          description,
          category,
          from,
          to,
          image: imageData.data.display_url,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        // post room data to the server
        addRooms(roomData)
          .then((data) => {
            console.log("data", data);
            if (data.insertedId) {
              toast.success("New Room Added");
              form.reset();
              setLoading(false);
            }
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });

    // setLoading(false);
  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  const handleDates = (ranges) => {
    // return console.log(ranges.selection)
    setDates(ranges.selection);
  };
  return (
    <AddRoomForm
      dates={dates}
      handleSubmit={handleFormSubmit}
      loading={loading}
      uploadButtonText={uploadButtonText}
      handleImageChange={handleImageChange}
      handleDates={handleDates}
    ></AddRoomForm>
  );
};

export default AddRoom;
