import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnime from "../assets/98642-error-404.json"

const Error = () => {
  const error = useRouteError();
  console.log(error.message);
  console.log(useRouteError());

  return (
    <section id="error-page" className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div id="error-page">
        <h1 className="text-3xl text-red-800 font-sans font-semibold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"} className="text-blue-700 font-medium">Click Here to go to main Page</Link>
        <Lottie animationData={errorAnime}></Lottie>
      </div>
    </section>
  );
};

export default Error;
