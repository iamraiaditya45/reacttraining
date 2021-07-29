import React from 'react'

const ThreeDot = () => {
    const [object , setObject]=React.useState(
        {myname:"Aditya",myage:26}
    );
const submit=()=>{
    setObject({...object,myage:1});
}
    return (
        <div>
           <h1>name:{object.myname} age:{object.myage}</h1> 
           <button onClick={submit}button></button>
        </div>
    )
}

export default ThreeDot
