// import React,{useState} from 'react'

// const Index = () => {
//     const [name , setName]=useState("hey man");

//     const submit=()=>{
//       let val=name;
//       if(val==="hey man"){
//        setName("hey man love you");
//     }
//     else{
//         setName("hey man");
//     }
// }
//     return (
//         <div>
//          <h1>{name}</h1>  
//          <button  onClick={submit}>Click me</button> 
//         </div>
//     )
// }

// export default Index


// import React ,{useState} from 'react'

// const HookArray = () => {
//     const biodata=[
//         {
//             id:0,name:"Aditya", lastname:"Rai"
//         },
//         {
//             id:1,name:"Aaditya", lastname:"Raai"
//         }
//     ]
//     const [fill , setFill]=useState(biodata);
 
//     const clear=()=>{
//         let val=fill;
//         if(val===biodata){
//         setFill([]);
//         }
//         else{
//             setFill(biodata);
//         }
//     }
//     return (
//         <div>{
//             fill.map((val)=>
//             <h1>name:{val.name}  lastname:{val.lastname}</h1>
// )
// }
// <button onClick={clear}>clear</button>
//         </div>
//     )
// }

// export default HookArray
