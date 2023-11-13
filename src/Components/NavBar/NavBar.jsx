import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="NavBarContainer">
      <a className="NavBarLink" href="/AgregarPaciente">
        Agregar paciente
      </a>
      <a className="NavBarLink" href="/BuscarPaciente">
        Buscar paciente
      </a>
    </div>
  );
}

export default NavBar;
