import React,{useState, useRef} from 'react'
import "./AgregarHistoriaClinica.css"

import { sendHistoriaNueva } from '../../services/firestore';

function AgregarHistoriaClinica(props) {
  const miBotonRef = useRef(null);
  function sendInfo(contactInfoObject) {
    sendHistoriaNueva(contactInfoObject)
  }
  const [dataForm, setDataForm] = useState({
    fecha: "",
    caso: "",
    numeroDeDocumento: props.DNI,
  });

  function inputChangeHander(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    const newDataForm = { ...dataForm };
    newDataForm[inputName] = inputValue;
    setDataForm(newDataForm);
  }

  function sendContactToFirestore(event) {
    event.preventDefault();
    console.log(dataForm);
    sendInfo(dataForm);
    miBotonRef.current.click();
    
  }
  return (
    <div id='AgregarHistoriaClinicaContainerContainer'>
<div id='AgregarHistoriaClinicaContainer'> 
      {/* Convertir el form en un component por su cuenta. que devuelva el objeto a subir :D  */}
      <button ref={miBotonRef} id='ButtonCerrarAgregarHistoria' onClick={props.onClose}>X</button>
      <form onSubmit={sendContactToFirestore} id="ContactFormContainer">
        
        <div className="formItem">
          <label htmlFor="fecha" className="labelForm texto">
            Fecha
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.fecha}
            name="fecha"
            type="date"
            placeholder=""
            required
            className="inputForm"
            id="inputFechaHistoria"
          />
        </div>
        <div className="formItem">
          <label htmlFor="caso" className="labelForm texto">
            Caso
          </label>
          <textarea
            onChange={inputChangeHander}
            value={dataForm.caso}
            name="caso"
            type="text"
            required
            className="inputForm"
            id="inputCasoHistoria"
          />
        </div>
        <button id="buttonForm">Enviar</button>
        
      </form>
</div>

    </div>
  )
}

export default AgregarHistoriaClinica