
import React, { useState,memo, useEffect } from "react";
import "./index.css";


function MoviePage() {
  const [rating, setRating] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setRating(rating + Math.floor(Math.random() * 4));
    }, 3000);
  }, [rating]);
  console.log(rating)
    return (
    <div className={"movieContainer"}>
    <div class="card">
   <img src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL__QL50.jpg" alt="BB"/>
   <div class="container">
     <h4><b>Breaking Bad</b></h4> 
     <p>20 sept 2019</p> 
             <p>5</p> 
   </div>
 </div>
 <div class="card">
   <img src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL__QL50.jpg" alt="GOT" />
   <div class="container">
     <h4><b>Game of Thrones</b></h4> 
     <p>28 sept 2008</p>
             <p>5</p> 
   </div>
 </div>
 <div class="card">
   <img src="https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_UY268_CR16,0,182,268_AL__QL50.jpg" alt="Avatar"/>
   <div class="container">
     <h4><b>Family Man</b></h4> 
     <p>18 April 2011</p> 
         <p>5</p> 
   </div>
 </div>
    </div>
  );
}

export default memo(MoviePage);