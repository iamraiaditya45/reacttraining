import React from "react";
import { Link, useHistory } from "react-router-dom";
import CardDetail from "./cardDetail";
import './index.css';
function Card({ id, heading, detail }) {
  const History = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    window.localStorage.setItem("token", "true");
    History.push("/CardDetail");
  }
  return (
    <div className={"ProductCard"}>
      <p className={"productCardID"}>Product ID:{id}</p>
      <h3 className={"productCardHead"}>{heading}</h3>
      <p className={"productCardDetail"}>{detail}</p>
      <button className={"moreButton"}>
        <Link to={`/CardDetail/${id}`} style={{ textDecoration: "none" }}>
          More Detail
        </Link>
      </button>
    </div>
  );
}
export default Card;