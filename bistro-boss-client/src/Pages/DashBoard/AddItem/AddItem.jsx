import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const menuItem = data;
          menuItem.image = imgURL;
          menuItem.price = parseFloat(menuItem.price);
          console.log(menuItem);
          axiosSecure.post("/menu", menuItem).then((data) => {
            console.log("After posting new menu item", data.data);
            if (data.data.acknowledged) {
                Swal.fire(
                    'New Recipee Added!',
                    '',
                    'success'
                  )
            //   toast.success("New Data Added");
              reset();
            }
          });
        }
      });
  };
  console.log(errors);

  return (
    <div className="w-full px-10 max-h-[80vh]">
      <div className="w-full">
      <SectionTitle subheading="Whats new" heading="Add an item"></SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="py-5">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipee Name?</span>
          </label>
          <input
            type="text"
            placeholder="Recipee name"
            className="input input-bordered w-full "
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Desi</option>
              <option>Desert</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipee details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            {...register("image", { required: true })}
          />
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-primary mt-4"
        />
      </form>
    </div>
  );
};

export default AddItem;
