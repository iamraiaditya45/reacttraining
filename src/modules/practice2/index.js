import React,{useState} from 'react';
 import './index.css';

//  const Clock =()=>{

//  let newTime=new Date().toLocaleTimeString();
//  const[time , setTime]=useState(newTime);
//  const incrementTime=()=>{
//       newTime=new Date().toLocaleTimeString();
//   setTime(newTime);
//  };
// const[name , setName]=useState("aditya");
// const changeName=()=>{
//     setName("aditya rai");
// };
// let myVar=setInterval(incrementTime,1000);

// const myStopFunction=()=> {
//     clearInterval(myVar);
//   };
//     return(
//         <div>
//             <h1>{time}</h1>
//             <button onClick={myStopFunction}>plz</button>
        
//          <h1>{name}</h1>
//          <button onClick={changeName}>plz</button>
//          </div>
//     );
// };

const App=()=>{
const [fullname , setFullname]=useState({
    fname:" ",
    lname:"  ",
    email:" ",
    phone:" "
});
// const[fullName , setFullname]=useState();
// const[lastname , setLastName]=useState("");
// const[fulllastname , setFulllastname]=useState();

    const inputEvent=(event)=>{
    
        const value=event.target.value;
        const name=event.target.name;
        // const {value ,name}=event.target;
        setFullname((preValue)=>{
            if(name==="fName"){
                return{
                    fname:value,
                    lname:preValue.lname,
                     email:preValue.email,
                     phone:preValue.phone
                };
             } else if(name==="lName"){
                    return{
                        fname:preValue.fname,
                        lname:value,
                        email:preValue.email,
                        phone:preValue.phone  
                    };
                
            } else if(name==="email"){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    phone:preValue.phone
                };
            
        } else if(name==="phone"){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                email:preValue.email,
                phone:value
            };
        
    }
        });
    };
    const onSubmits=(event)=>{
        event.preventDefault();

    };
    

return(
<div>
    <form onSubmit={onSubmits}>
        <div>
   
<input type="text"
 name="fName" 
 placeholder="Your first name.." 
 onChange={inputEvent}
  value={fullname.fname} />
<input type="text" 
name="lName" 
placeholder="Your last name.."
 onChange={inputEvent}
  value={fullname.lname} />
  <input type="text" 
name="email" 
placeholder="Your email.."
 onChange={inputEvent}
  value={fullname.email} />
  <input type="number" 
name="phone" 
placeholder="Your phone num.."
 onChange={inputEvent}
  value={fullname.phone} />
<button type="submit" >plx god</button>
<tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>PhoneNumber</th>
    </tr>
    <tr>
    <td> {fullname.fname}  </td>
    <td>{fullname.lname}  </td>
    <td>{fullname.email}</td>
    <td>{fullname.phone}</td>
    </tr>
</div>
</form>
</div>
);
};
export default App;