import React from "react";
import bgimage from "../assets/netFlixbannerpage.jpg";
import LoginandsigninForm from "../pages/loginandsigninForm";
import Hedder from "./Hedder";

const SigninAndLogin = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="overlay">
        <img
          src={bgimage}
          alt="netflix"
          className="w-full h-screen object-cover relative scale-130 skew-y-7"
        />
        {/* <Hedder /> */}
      </div>
      <div>
        <LoginandsigninForm />
      </div>
    </div>

    // </div>
  );
};

export default SigninAndLogin;
