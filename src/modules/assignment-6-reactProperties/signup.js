import React ,{useState}from "react";
import "./index.css";
import Login from "./login";

function Signup(){
  const [isSignup, setSignup] = useState(true);
  
    return (
        <>
      {!isSignup ? (
        <div className={"signUp-Container"}>
          <form>
          <h1>Sign Up</h1>
   <label for="userName"><b>Username</b></label>
     <input type="text" placeholder="Enter Username" name="user-name" />


<label for="email"><b>Email</b></label>
     <input type="text" placeholder="Enter Email" name="email" />


    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />


<button onClick={"moviesPage.js"} className={"submit"} type={"button"}>
              {"Sign Up"}
            </button>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
      
    );
  }
  export default Signup;      
   