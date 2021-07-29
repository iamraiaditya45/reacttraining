
import React ,{useState} from 'react'

const HookArray = () => {
    const biodata=[
        {
            id:0,name:"Aditya", lastname:"Rai"
        },
        {
            id:1,name:"Aaditya", lastname:"Raai"
        }
    ]
    const [fill , setFill]=useState(biodata);
 
    const clear=()=>{
        let val=fill;
        if(val===biodata){
        setFill([]);
        }
        else{
            setFill(biodata);
        }
    }
    return (
        <div>{
            fill.map((val)=>
            <h1>name:{val.name}  lastname:{val.lastname}</h1>
)
}
<button onClick={clear}>clear</button>
        </div>
    )
}

export default HookArray