import React from 'react'
import './App.css'
import {useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber,getUserData} from './actions/index';
const App=()=>{
  const {userData}=useSelector((state=>state.changeTheNumber))
  
  const dispatch=useDispatch();
  return (
    <>
    {/* <h1 className="ram">INCREMENT/DECREMENT</h1> */}
    <div className="quantity">
      {/* <a className="quantity_minus" title="decrement"onClick={()=>dispatch(decNumber())}><button>DECREMENT</button></a>
      <input name="quantity" className="quantity1"type="text" value={myState}/>
      <a className="quantity_plus" title="increment" onClick={()=>dispatch(incNumber())}><button>INCREMENT</button></a> */}
      <button onClick={()=>{
            dispatch(getUserData())
        }}>userData</button>
    </div>
    <table id="customers">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>YEAR</th>
  </tr>

  {userData.length &&
  userData.map((user)=>{
    return(
      <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.year}</td>
  </tr>
    )

  })}
 
</table>

    </>
  )
}

export default App;