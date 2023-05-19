import React, { useContext } from "react";
import { AuthContext } from "../ContextProviders/AuthProviders";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialButtons = ({ from }) => {
  const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast("Login successfull");
        location.reload();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  return (
    <div>
      <img
        src="socialGoogle.png"
        alt=""
        className="cursor-pointer"
        onClick={handleGoogleLogin}
      />
    </div>
  );
};

export default SocialButtons;
