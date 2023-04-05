import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorLottie from "../public/9195-error.json"

const ErrorPage = () => {
  const error = useRouteError();
//   console.error(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={"/"}>Click here to go to main page</Link>
    </div>
  );
};

export default ErrorPage;
