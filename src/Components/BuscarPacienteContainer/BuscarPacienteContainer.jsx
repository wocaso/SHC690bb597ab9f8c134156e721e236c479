import React, { useState } from "react";
import "./BuscarPacienteContainer.css";

function BuscarPacienteContainer() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    window.location.href = "/FichaPaciente/" + inputValue;
  };
  return (
    <div id="BuscarPacienteContainerContainer">
      <h1 id="BuscarPacienteContainerLabel">Ingrese numero de documento</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="inputForm"
      />

      <button id="BuscarPacienteContainerButton" onClick={handleButtonClick}>Buscar paciente</button>
    </div>
  );
}

export default BuscarPacienteContainer;
