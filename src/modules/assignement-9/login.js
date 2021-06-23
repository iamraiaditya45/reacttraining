import React from "react";
import { useHistory} from "react-router-dom";
import { useLocation, Route } from "react-router-dom";
import Card from "./card";
import './index.css';

function Login() {
  const History = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    window.localStorage.setItem("token", "true");
    History.push("/Card");
  }

  return (
    <div className={"login-card"}>
      <h2>Login Here</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor={"username"} >
          {"User-Name:"}
        </label>
    <input type="text" id="username" name="username" placeholder="Your username.."required/>

        <label htmlFor={"email"} className={"inputlabel"}>
          {"Email-ID:"}
        </label>
            <input type="text" id="email" name="EmailId" placeholder="Your Email Address.."required/>

        <label htmlFor={"password"} >
          {"Password:"}
        </label>
        <input type="password" id={"password"}name={"password"}className={"inputfield"}placeholder={"Enter Password"}required/>
        <button class="login-button" >Login</button>
      </form>
    </div>
  );
}

export default Login;