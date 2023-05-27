import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextProviders/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {

  const {createUser,setPictureAndName} = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const name = data.name;
    const photo = data.photo;
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateProfile(name,photo)
      Swal.fire(
        'New User Created!',
        'Seccessfully Logged in!',
        'success'
      )
      navigate('/');
      location.reload();
    })
    .catch(err=>{
      console.log(err);
    })
  };

  const updateProfile = (userName,displayPhoto) =>{
    setPictureAndName(userName,displayPhoto)
    .then(()=>{})
    .catch(err=>{
      toast(err.message);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email?.type == "required" && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="passwod"
                className="input input-bordered"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern:
                  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                })}
              />
              {errors.password?.type == "required" && (
                <span className="text-red-600">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-600">
                  Password must be 8 charector or more than 8 cha
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p role="alert">Password not be more than 20 charectors</p>
              )}
              {errors.password?.type === "pattern" && (
                <p role="alert" className="text-red-600">Password must have one uppercase one lowercase one special symble one number</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="SignUp" className="btn btn-primary"/>
            </div>
          </form>
          <p><small>Already have an account? <Link to="/login" className="text-orange-400 text-xl">Please Login</Link> </small></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
