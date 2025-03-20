import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal 
          onClose={onClose}
          header={<h1>Cabecera Personalizada</h1>} 
          body={<div>Cuerpo Personalizado para el Modal c:</div>}           
          footer={<h1>Pie de Pagina Personalizado</h1>} 
        />
      )}
    </div>
  );
}
