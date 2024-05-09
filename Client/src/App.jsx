
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
      {/* {location.pathname === "/home" ? (
        <div className="">
          <h1 className="titulo">PROYECTO FINAL</h1>
        </div>
      ) : undefined} */}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/password"
          element={<Password />}
        />
        <Route
          path="/generarfactura"
          element={isAuthenticated ? <GenerarFactura /> : <Login />}
        />
        <Route
          path="/invoice"
          element={isAuthenticated ? <Invoice /> : <Login />}
        />
        <Route
          path="/authorization"
          element={isAuthenticated ? <Authorization /> : <Login />}
        />
        <Route
          path="/poder"
          element={isAuthenticated ? <Poder /> : <Login />}
        />
        <Route
          path="/bankruptcy"
          element={isAuthenticated ? <Bankruptcy /> : <Login />}
        />
        <Route
          path="home/clientregister"
          element={isAuthenticated ? <Client /> : <Login />}
        />
        <Route
          path="home/reminders"
          element={isAuthenticated ? <ConfigReminders/> : <Login />}
        />

        <Route
          path="home/contract"
          element={isAuthenticated ? <Contract /> : <Login />}
        />
        
        <Route path="/home" element={<Home />} />
        <Route path="/home/detail" element={isAuthenticated ? <Detail /> : <Login />} />
        <Route path="/home/cases/:id" element={isAuthenticated ? <Cases /> : <Login />} />
        <Route path="/home/costumers/:id" element={isAuthenticated ? <Costumers />: <Login />}/>
        <Route path="/home/lawyers/:id" element={isAuthenticated ?<Lawyers />: <Login />} />
        <Route path="/home/documents/:id" element={isAuthenticated ? <Documents />: <Login />}/>
        <Route path="/home/diary" element={isAuthenticated ?<Diary />: <Login />}/>
        <Route path="/home/payments" element={isAuthenticated ?<Payments />:<Login />}/>
        <Route path="/home/consult" element={isAuthenticated ?<Consult />:<Login />}/>
        <Route path="/home/statistics" element={isAuthenticated ?<Statistics />:<Login />}/>
      </Routes>
    </div>
  );
}

export default App
