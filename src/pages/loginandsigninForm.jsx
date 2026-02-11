import React, { useRef, useState } from "react";
import {checkvalidateSignUp, checkvalidateSignIn} from "../utils/validate";

const LoginandsigninForm = () => {
  const [signState, setSignState] = useState(false);

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const emailref = useRef(null);
  const passwordref = useRef(null);
  const nameref = useRef(null);

  // TOGGLE FORM
  const toggleSign = () => {setSignState(!signState)
    emailref.current.value = "";
    passwordref.current.value = "";
  };

  // SIGN IN
  const handleSignInForm = () => {
      checkvalidateSignIn(emailref.current.value,passwordref.current.value,setEmailError,setPasswordError);
};

// SIGN UP
const handleSignUpForm = () => {
      checkvalidateSignUp(nameref.current.value,emailref.current.value,passwordref.current.value,setEmailError,setPasswordError, setNameError);
   
 
  };
 

  return (
    <div
      className="w-1/4 absolute top-[55%] left-1/2 py-8 px-10 
      -translate-x-1/2 -translate-y-1/2 bg-black/80 z-10 rounded-md"
    >
      {/* TITLE */}
      <h1 className="text-white text-4xl font-extrabold pb-8">
        {signState ? "Sign up" : "Sign in"}
      </h1>

      {/* NAME FIELD */}
      {signState && (
        <div className="w-full relative mt-4">
          <label
            className={`absolute left-3 pointer-events-none transition-all duration-200
            ${nameFocus ? "top-1 text-sm text-white" : "top-3 text-lg text-white/50"}`}
          >
            Name
          </label>

          <input
            type="text"
            ref={nameref}
            className="w-full h-12 bg-[#333333] text-white rounded px-3 pt-5 outline-none"
            onFocus={() => setNameFocus(true)}
            onBlur={(e) => !e.target.value && setNameFocus(false)}
          />
        </div>
      )}
      {nameError && <p className="text-red-500 text-sm mt-1 font-extrabold">{nameError}</p>}

      {/* EMAIL FIELD */}
      <div className="w-full relative mt-4">
        <label
          className={`absolute left-3 pointer-events-none transition-all duration-200
          ${emailFocus ? "top-1 text-sm text-white" : "top-3 text-lg text-white/50"}`}
        >
          Email or phone number
        </label>

        <input
          type="text"
          ref={emailref}
          className="w-full h-12 bg-[#333333] text-white rounded px-3 pt-5 outline-none"
          onFocus={() => setEmailFocus(true)}
          onBlur={(e) => !e.target.value && setEmailFocus(false)}
        />
      </div>
      {emailError && <p className="text-red-500 text-sm mt-1 font-extrabold">{emailError}</p>}

      {/* PASSWORD FIELD */}
      <div className="w-full relative mt-4">
        <label
          className={`absolute left-3 pointer-events-none transition-all duration-200
          ${passwordFocus ? "top-1 text-sm text-white" : "top-3 text-lg text-white/50"}`}
        >
          Password
        </label>

        <input
          type="password"
          ref={passwordref}
          className="w-full h-12 bg-[#333333] text-white rounded px-3 pt-5 outline-none"
          onFocus={() => setPasswordFocus(true)}
          onBlur={(e) => !e.target.value && setPasswordFocus(false)}
        />
      </div>
        {passwordError && <p className="text-red-500 text-sm mt-1 font-extrabold">{passwordError}</p>}

      {/* MAIN BUTTON */}
      <button
        onClick={signState ? handleSignUpForm : handleSignInForm}
        className="w-full h-12 bg-[#E50914] text-white rounded mt-5 font-bold cursor-pointer hover:bg-red-700 transition duration-200"
      >
        {signState ? "Sign Up" : "Sign In"}
      </button>


      {!signState && ( <div className="text-center mt-4 text-white/60"> 
      <p>OR</p> 
      <button className="w-full h-12 bg-white/20 text-white cursor-pointer rounded 
      mt-3 font-bold hover:bg-white/10 transition duration-200">
       Use a Sign In Code </button>
       <p className="mt-4 underline cursor-pointer">Forgot Password?</p> 
       </div> )}

      {/* TOGGLE TEXT */}
      <div className="text-white/60 mt-6">
        {signState ? "Already have an account?" : "New to Netflix?"}

        <span
          className="text-white ml-2 cursor-pointer font-semibold"
          onClick={toggleSign}
        >
          {signState ? "Sign In" : "Sign Up Now"}
        </span>
      </div>
    </div>
  );
};

export default LoginandsigninForm;
