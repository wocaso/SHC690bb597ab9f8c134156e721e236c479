import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

//componentes
import NavBar from './Components/NavBar/NavBar';
import AgregarPacienteContainer from './Components/AgregarPacienteContainer/AgregarPacienteContainer';
import BuscarPacienteContainer from './Components/BuscarPacienteContainer/BuscarPacienteContainer';
import FichaPacienteContainer from './Components/FichaPacienteContainer/FichaPacienteContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
      <Route path='/AgregarPaciente' element={<AgregarPacienteContainer/>}/>
      <Route path='/BuscarPaciente' element={<BuscarPacienteContainer/>}/>
      <Route path='/FichaPaciente/:pac' element={<FichaPacienteContainer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
