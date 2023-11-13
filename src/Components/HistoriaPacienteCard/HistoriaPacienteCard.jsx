import React from "react";
import "./HistoriaPacienteCard.css";

function HistoriaPacienteCard(props) {
  function cambiarOrdenFecha(fechaString) {
    // Suponemos que la fecha está en el formato "yyyy/dd/mm"
    const [anio, dia, mes] = fechaString.split('-');
  
    // Creamos una nueva cadena con el orden cambiado
    const nuevaFechaString = `${dia}/${mes}/${anio}`;
  
    return nuevaFechaString;
  }
let fechaFormateada =   cambiarOrdenFecha(props.fecha)
  return (
    <div id="HistoriaPacienteCardContainer">
      
      <h1 id="HistoriaPacienteCardFecha">{fechaFormateada}</h1>
      <textarea id="HistoriaPacienteCardCaso" readOnly>{props.caso}</textarea>
    </div>
  );
}

export default HistoriaPacienteCard;
