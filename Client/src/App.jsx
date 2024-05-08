
//Importar modulos necesarios
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import Login from './components/login';
import { Loginf, ClickHandlerCrear, ClickHandlerRecordatorio } from "./handlers/login";
import { useSelector } from "react-redux";

function App() {
  
    const location = useLocation();
   const isAuthenticated = useSelector((state) => state.isAuthenticated);

    //Funcion para verificar datos de ingreso

  
  return (
    <div className="App">
      {location.pathname === "/home" ? (
        <div className="">
          <h1 className="titulo">PROYECTO FINAL</h1>
        </div>
      ) : undefined}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/crearusuario"
          element={<CrearUsuario crearUsuario={crearUsuario} />}
        />
        <Route
          path="/recordatoriocontrasena"
          element={<RecordatorioContrasena />}
        />
        <Route
          path="/collaboration"
          element={isAuthenticated ? <Collaboration /> : <Login />}
        />
        <Route
          path="/generarfactura"
          element={isAuthenticated ? <GenerarFactura /> : <Login />}
        />
        <Route
          path="/cotizacion"
          element={isAuthenticated ? <Cotizacion /> : <Login />}
        />
        <Route
          path="/autorizacion"
          element={isAuthenticated ? <Autorizacion /> : <Login />}
        />
        <Route
          path="/poder"
          element={isAuthenticated ? <Poder /> : <Login />}
        />
        <Route
          path="/insolvencia"
          element={isAuthenticated ? <Insolvencia /> : <Login />}
        />
        <Route
          path="/registrocliente"
          element={isAuthenticated ? <RegistroCliente /> : <Login />}
        />
        <Route
          path="/detail"
          element={isAuthenticated ? <Detail /> : <Login />}
        />
        <Route
          path="/previsualizarcontrato"
          element={isAuthenticated ? <PrevisualizarContrato /> : <Login />}
        />
        <Route
          path="/configurarrecordatorios"
          element={isAuthenticated ? <ConfigurarRecordatorios /> : <Login />}
        />
        <Route
          path="/agendarcitas"
          element={isAuthenticated ? <AgendarCitas /> : <Login />}
        />
        <Route
          path="/contrato"
          element={isAuthenticated ? <Contrato /> : <Login />}
        />
        <Route
          path="/documentoslegales"
          element={isAuthenticated ? <DocumentosLegales /> : <Login />}
        />
        <Route
          path="/litigoiosporcliente"
          element={isAuthenticated ? <LitigiosPorCliente /> : <Login />}
        />
        <Route
          path="/conocimientodelitigios"
          element={isAuthenticated ? <ConocimientoDeLitigios /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App
