import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
