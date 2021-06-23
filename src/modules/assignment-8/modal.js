import React from 'react'
import './index.css';


 const Modal =({showModal , setShowModal})=>{
    return<>{showModal? <div>
<div showModal={showModal} className="card ">
    {/* <div className="form"> */}
<form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Email</label>
    <input type="text" id="email" name="EmailId" placeholder="Your Email Address.."/>
  
    <button type="submit"  area-label='Close modal' onclick={()=>setShowModal
    (prev=>!prev)} >SUBMIT</button>
  </form>
  {/* </div> */}
  </div >
    </div> : null}</>;
    
};
export default Modal;