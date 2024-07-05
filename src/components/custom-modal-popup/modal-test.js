import { useState } from "react"
import Modal from "./Modal";
import './modal.css'


export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false)
    }

    return(
        <div>
           <button onClick={handleToggleModalPopup}>Open Modal Popup</button> 
           {
                showModalPopup && <Modal
                onClose={onClose}
                body={<div>This is our customized body</div>}
                />
           }
        </div>
    )
}