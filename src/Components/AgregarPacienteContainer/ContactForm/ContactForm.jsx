import React, { useState } from "react";
import "./ContactForm.css";
import { sendPacienteNuevo } from "../../../services/firestore";


//MOVER AL USUARIO A OTRO LINK CUANDO ME MANDAN SUS DATOS DE CONTACTO.

function ContactForm() {
  // ejecuta la funcion de firestore.js para enviar los datos a fb.
  function sendInfo(contactInfoObject) {
    sendPacienteNuevo(contactInfoObject)
  }

  //state de los datos del usuario.
  const initialState = {
    apellido: "",
    nombre: "",
    obraSocial: "",
    telefono: "",
    direccion: "",
    fechaDeNacimiento: "",
    numeroDeDocumento: "",
  }
  const [dataForm, setDataForm] = useState(initialState);

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
    setDataForm(initialState)
  }
  return (
    <div>
      {/* Convertir el form en un component por su cuenta. que devuelva el objeto a subir :D  */}
      <form onSubmit={sendContactToFirestore} id="ContactFormContainer">
        <div className="formItem">
          <label htmlFor="nombre" className="labelForm texto">
            Nombre
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.nombre}
            name="nombre"
            type="text"
            required
            className="inputForm"
            id="inputNombre"
          />
        </div>
        <div className="formItem">
          <label htmlFor="apellido" className="labelForm texto">
            Apellido
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.apellido}
            name="apellido"
            type="text"
            required
            className="inputForm"
            id="inputApellido"
          />
        </div>
        <div className="formItem">
          <label htmlFor="telefono" className="labelForm texto">
            Telefono
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.telefono}
            name="telefono"
            type="text"
            required
            className="inputForm"
            id="inputTelefono"
          />
        </div>
        <div className="formItem">
          <label htmlFor="obraSocial" className="labelForm texto">
            Obra Social
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.obraSocial}
            name="obraSocial"
            type="text"
            required
            className="inputForm"
            id="inputObraSocial"
          />
        </div>
        <div className="formItem">
          <label htmlFor="numeroDeDocumento" className="labelForm texto">
            DNI
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.numeroDeDocumento}
            name="numeroDeDocumento"
            type="text"
            required
            className="inputForm"
            id="inputNumeroDeDocumento"
          />
        </div>
        <div className="formItem">
          <label htmlFor="fechaDeNacimiento" className="labelForm texto">
            Fecha de nacimiento
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.fechaDeNacimiento}
            name="fechaDeNacimiento"
            type="text"
            required
            className="inputForm"
            id="inputFechaDeNacimiento"
          />
        </div>
        <div className="formItem">
          <label htmlFor="direccion" className="labelForm texto">
            Direccion
          </label>
          <input
            onChange={inputChangeHander}
            value={dataForm.direccion}
            name="direccion"
            type="text"
            required
            className="inputForm"
            id="inputDireccion"
          />
        </div>
        <button id="buttonForm">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
