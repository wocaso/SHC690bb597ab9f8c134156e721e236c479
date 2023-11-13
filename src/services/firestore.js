// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkKNlIpgPUiru27abSVpDFt4ypTO0QW_4",
  authDomain: "historiasclinicassd.firebaseapp.com",
  projectId: "historiasclinicassd",
  storageBucket: "historiasclinicassd.appspot.com",
  messagingSenderId: "691495072716",
  appId: "1:691495072716:web:71d71fa923f136d314a369",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function sendPacienteNuevo(contactData) {
  let exist = await getCatData(contactData.numeroDeDocumento)
  if(exist.length === 0){
    const collectionRef = collection(firestore, "Pacientes");
    let res = await addDoc(collectionRef, contactData);
    Swal.fire({
      title: 'Exito',
      text:"Paciente registrado correctamente.",
      icon: 'success', // Puedes cambiar el icono (success, error, warning, info, etc.)
      confirmButtonText: 'Aceptar',
    });
    return res.id;
    
  }else{
    Swal.fire({
      title: 'Paciente ya registrado!',
      text: 'Ya existe un paciente con ese numero de documento en los archivos.',
      icon: 'error', // Puedes cambiar el icono (success, error, warning, info, etc.)
      confirmButtonText: 'Aceptar',
    });
  }

}

export async function sendHistoriaNueva(contactData) {
    const collectionRef = collection(firestore, "Hclinicas");
    let res = await addDoc(collectionRef, contactData);
    Swal.fire({
      title: 'Exito',
      text:"Historia clinica agregada correctamente.",
      icon: 'success', // Puedes cambiar el icono (success, error, warning, info, etc.)
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
    return res.id;

}


export async function getData() {
  const myCollection = collection(firestore, "Pacientes");
  let snapShotDB = await getDocs(myCollection);
  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormat = { ...documento.data(), id: documento.id };
    return docFormat;
  });
  return dataDocs;
}

export async function getCatData(catParams) {
  const collectionRef = collection(firestore, "Pacientes");
  const queryCategory = query(
    collectionRef,
    where("numeroDeDocumento", "==", catParams)
  );
  const respuesta = await getDocs(queryCategory);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormat = { ...documento.data(), id: documento.id };
    return docFormat;
  });
  return dataDocs;
}

export async function getHclinicas(catParams) {
  const collectionRef = collection(firestore, "Hclinicas");
  const queryCategory = query(
    collectionRef,
    where("numeroDeDocumento", "==", catParams)
  );
  const respuesta = await getDocs(queryCategory);
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormat = { ...documento.data(), id: documento.id };
    return docFormat;
  });
  return dataDocs;
}
