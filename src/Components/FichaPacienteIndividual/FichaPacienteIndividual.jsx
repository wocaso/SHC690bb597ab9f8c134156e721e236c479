import React,{useState} from "react";
import "./FichaPacienteIndividual.css";

import HistoriaPacienteCard from "../HistoriaPacienteCard/HistoriaPacienteCard";
import AgregarHistoriaClinica from "../AgregarHistoriaClinica/AgregarHistoriaClinica";


function FichaPacienteIndividual(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  let key = 0;
  return (
    <div>
    <div id="FichaPacienteIndividualContainer">
      <div className="textoFichaPacienteIndividual">
        <h1>Nombre:</h1>
        <h1 className="infoFichaPacienteIndividual">
          {props.pacienteInfo[0].nombre + " " + props.pacienteInfo[0].apellido}
        </h1>
      </div>
      <div className="textoFichaPacienteIndividual">
        <h1>Direccion:</h1>
        <h1 className="infoFichaPacienteIndividual">{props.pacienteInfo[0].direccion}</h1>
      </div>
      <div className="textoFichaPacienteIndividual">
        <h1>Fecha de nacimiento:</h1>
        <h1 className="infoFichaPacienteIndividual">{props.pacienteInfo[0].fechaDeNacimiento}</h1>
      </div>
      <div className="textoFichaPacienteIndividual">
        <h1>Dni:</h1>
        <h1 className="infoFichaPacienteIndividual">{props.pacienteInfo[0].numeroDeDocumento}</h1>
      </div>
      <div className="textoFichaPacienteIndividual">
        <h1>Telefono:</h1>
        <h1 className="infoFichaPacienteIndividual">{props.pacienteInfo[0].telefono}</h1>
      </div>
      <div className="textoFichaPacienteIndividual">
        <h1>Obra social:</h1>
        <h1 className="infoFichaPacienteIndividual">{props.pacienteInfo[0].obraSocial}</h1>
      </div>
      <button id="FichaPacienteIndividualButton" onClick={openModal}>Agregar historia clinica</button>
   
          {
            modalOpen && <AgregarHistoriaClinica onClose={closeModal} DNI={props.pacienteInfo[0].numeroDeDocumento}/>
          }


    </div>
    <div>
    {props.pacienteHistoria.map(p=>{
            key+=1
            
            return <HistoriaPacienteCard key={key}caso={p.caso} fecha={p.fecha}/>
            
          })}
    </div>



    </div>
          
  );
}

export default FichaPacienteIndividual;
