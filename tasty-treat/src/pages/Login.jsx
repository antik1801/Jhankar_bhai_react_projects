import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(true);
  const { signInWithEmail, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        form.reset();
        toast("Successfully signed in");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast("Successfully logged in");
        navigate("/");
      })
      .catch((error) => {
        toast(message.error);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        toast("successfully logged in");
        navigate("/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="w-1/3 mx-auto mt-20 mb-20 border border-gray-300 shadow-lg p-10">
      <form onSubmit={handleLogin}>
        <div className="w-full mx-auto my-3">
          <h1 className="text-3xl font-serif">Login</h1>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type={show ? "password" : "text"}
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              onClick={(e) => setShow(!e.target.checked)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            see password
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
        <p className="my-3 text-xl">
          Don't have an account?{" "}
          <button className="btn btn-link text-amber-400">
            <Link to={"/register"}>Please Register</Link>{" "}
          </button>
        </p>
      </form>
      <button
        class="w-full mx-auto font-semibold px-4 py-2 border gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:bg-slate-300 hover:text-slate-900 hover:shadow transition duration-150 flex items-center justify-center"
        onClick={handleGoogleSignIn}
      >
        <img
          class="w-6 h-6 text-center"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </button>
      <button
        class="bg-black rounded-lg text-white text-xs  px-3 py-2 my-2  w-full flex items-center justify-center hover:bg-blue-950"
        onClick={handleGithubSignIn}
      >
        {" "}
        <FaGithub className="text-2xl"></FaGithub>
        <span className="text-base ml-2">Sign in with Github</span>{" "}
      </button>
    </div>
  );
};

export default Login;
