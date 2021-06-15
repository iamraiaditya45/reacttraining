import React from 'react';

let currentDate= new Date();
 currentDate=currentDate.getHours();
let greeting=" ";
 if(currentDate>0&&currentDate<12){
greeting="good morning"
 }
 else if(currentDate>12&&currentDate<18){
    greeting="good afternoon"
     }
     else{
        greeting="good evening"
         }
function getDate(){
    return(
<h1> hello {greeting}</h1>

    );
}
export default getDate;