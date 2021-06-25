
import React from 'react';
import {useHistory,Link} from 'react-router-dom';
import Carddetail from "./ProductDetail.js";
import { useState , useEffect } from 'react';

function Product(){
    const [logged, setLogged] = useState(
        JSON.parse(window.localStorage.getItem("token"))
      );
      const history = useHistory();
    
      useEffect(() => {
        if (!logged) {
          history.push("/");
        }
      }, [logged]);
    
      const handleLogOut = () => {
        window.localStorage.setItem("token", false);
        setLogged(JSON.parse(window.localStorage.getItem("token")));
      };
    return(
        <>
        <div className={"productPageHeader"}>
        <h1 className={"productrange"}>{"Range of Products"}</h1>
        <button className={"logout-btn"} onClick={() => handleLogOut()}>{"LOGOUT"}</button>
        </div>
<div class="card-container">
<div class="card">
    <div class="top">
        <h1 class="basic"> Basic</h1>
    </div>
        <div class="money-part">
        <h2><span class="money">$200</span> .Coupons</h2>
    <hr></hr>
    </div>

    <h3 class="including">Including Group Personal Accident Policy</h3>
    <button className={"button button4"}>
        <Link to={`/Carddetail/`} style={{ textDecoration: "none" }}>
        Buy Now
        </Link>
      </button>
</div>
<div class="card">
    <div class="top-2">
        <h1 class="basic"> Basic</h1>
    </div>
        <div class="money-part">
        <h2><span class="money-2">$200</span> .SX Coupons</h2>
    <hr></hr>
    </div>

    <h3 class="including">Including Group Personal Accident Policy</h3>
    <button class="button button4">Buy Now</button>
</div>
<div class="card">
    <div class="top-3">
        <h1 class="basic"> Standard</h1>
    </div>
        <div class="money-part">
        <h2><span class="money-3">$200</span> .Coupons</h2>
    <hr></hr>
    </div>

    <h3 class="including">Including Group Personal Accident Policy.Group Terms Life &Hospital</h3>
    <button class="button button4">Buy Now</button>
</div>
</div>


        </>
    );
}
export default Product;