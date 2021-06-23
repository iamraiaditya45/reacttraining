import React ,{useState} from 'react';
 import Modal from './modal.js'

function App(){
    const [showModal,setShowModal]=useState(false)

const openModal=()=>{
    setShowModal(prev=>!prev)
}

    return(
        <div>
    <button onClick={openModal} class="button" >OPEN</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}


export default App;