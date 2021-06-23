import React from 'react';
import { Link, useHistory ,useParams} from "react-router-dom";
import { useState, useEffect } from "react";

const Carddetail=()=> {
  const [logged, setLogged] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const history = useHistory();
  const {ProductID}=useParams();
  console.log(ProductID);

  useEffect(() => {
    if (!logged) {
      history.push("/");
    }
  }, [logged]);

  const handleLogOut = () => {
    window.localStorage.setItem("token", false);
    setLogged(JSON.parse(window.localStorage.getItem("token")));
  };

const Carddetail=()=>{
    return(
    <div>
    <h1>card detail</h1>
    </div>
    );
};
}
export default Carddetail;