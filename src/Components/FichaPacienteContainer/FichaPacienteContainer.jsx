import React, { useState, useEffect } from "react";
import "./FichaPacienteContainer.css";
import Loader from "../Loader/Loader";
import { getCatData, getHclinicas } from "../../services/firestore";
import { useParams } from "react-router-dom";
import FichaPacienteIndividual from "../FichaPacienteIndividual/FichaPacienteIndividual";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function FichaPacienteContainer() {
  const [data, setData] = useState([]);
  const [dataHistorias, setDataHistorias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pac } = useParams();
  function compararPorFecha(a, b) {
    const fechaA = new Date(a.fecha);
    const fechaB = new Date(b.fecha);
  
    return fechaB - fechaA;
  }

  useEffect(
    () => {
      setIsLoading(true);
      getCatData(pac).then((respuesta) => {
        if(respuesta.length > 0){
          getHclinicas(respuesta[0].numeroDeDocumento).then((respuesta) => {
            setIsLoading(false);
            respuesta.sort(compararPorFecha);
            setDataHistorias(respuesta);
          });
          setData(respuesta);
        }else{
          Swal.fire({
            title: 'Error!',
            text:"Paciente no encontrado.",
            icon: 'error', // Puedes cambiar el icono (success, error, warning, info, etc.)
            confirmButtonText: 'Aceptar',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/BuscarPaciente"
            }
          });
          
        }

      });
    },
    [pac],
    [data]
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : ( 
        <FichaPacienteIndividual
          pacienteInfo={data}
          pacienteHistoria={dataHistorias}
        />
      )}
    </div>
  );
}

export default FichaPacienteContainer;
