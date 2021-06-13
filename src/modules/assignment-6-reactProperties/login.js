
import "./index.css";
import MoviesPage from "./moviePage";
import { useState } from "react";

function Login() {
  const [login, setLogin] = useState(true);
  
  return (
    <>
      {!login ? (
        <div className={"login-Container"}>
            <h1>Sign Up</h1>


   <label for="userName"><b>Username</b></label>
     <input type="text" placeholder="Enter Username" name="user-name" />

     <label for="psw"><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" />

          <button
            type="submit"
            value={"SUBMIT"}
            className={"submitBtn"}
            onClick={"#"}
          ></button>
        </div>
      ) : (
        <moviesPage />
      )}
    </>
  );
}
export default Login;