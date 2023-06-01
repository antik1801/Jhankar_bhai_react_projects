import React, { useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";


const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  // handleFormSubmit
  const handleFormSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    // const from = dates.startDate;
    // const to = dates.endDate;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];
    // upload image
    imageUpload(image)
    .then(data => console.log(data))
    .catch(err=>{
        console.log(err.message);
        setLoading(false);
    })

  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <AddRoomForm
        handleFormSubmit={handleFormSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
