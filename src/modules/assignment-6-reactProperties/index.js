

import React, {  useState } from "react";
import "./index.css";
import Login from "./login";
import Signup from "./signup";

function Assignment6() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const checkLogin = () => {
    setLoginOpen(true);
  };
  const checkSignup = () => {
    setSignupOpen(true);
  };
  return (
    <div>
      {signupOpen && <Login/>}
      {loginOpen && <Signup/>}
        <div className={"mainContainer"}>
          <button type={"button"} className={"button"}  onClick={checkLogin}>
            LOGIN
          </button>
          <button type={"button"} className={"button"} onClick={checkSignup}>
            SIGNUP
          </button>
        </div>
      {loginOpen && <login />}
        {signupOpen && <signup />}
    </div>
  );
}

export default Assignment6;