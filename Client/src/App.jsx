//Importar modulos necesarios
import Landing from './views/landing/landing.component'
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Cases from './views/cases/cases.component';
import Costumers from './views/costumers/costumers.component';
import Lawyers from './views/lawyers/lawyers.components';
import Documents from './views/documents/documents.component';
import Diary from './views/diary/diary.components';
import Payments from './views/payments/payments.component';
import Consultations from './views/consultations/consultations.component';
import Statistics from './views/statistics/statistics.component';
import CreateUser from './views/createUser/createUser.component'
import Password from './views/password/password.component';
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";

function App() {
  
    const location = useLocation();
   const isAuthenticated = useSelector((state) => state.isAuthenticated);

    //Funcion para verificar datos de ingreso

  
  return (
    <div className="App">
      {location.pathname === "/home" ? (
        <div className="">
          <h1 className="titulo">LEGAL TECH</h1>
        </div>
      ) : undefined}
      <Routes>

        <Route path="/" element={<Landing/>}/>
        <Route path="/crearusuario" element={<CreateUser/>}/>
        <Route path="/recordatoriocontrasena" element={<Password/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/detail' element={<Detail/>}/>
        <Route path='/home/cases/:id' element={<Cases/>}/>
        <Route path='/home/costumers/:id' element={<Costumers/>}/>
        <Route path='/home/lawyers/:id' element={<Lawyers/>}/>
        <Route path='/home/documents/:id' element={<Documents/>}/>
        <Route path='/home/diary' element={<Diary/>}/>
        <Route path='/home/payments' element={<Payments/>}/>
        <Route path='/home/consultation' element={<Consultations/>}/>
        <Route path='/home/statistics' element={<Statistics/>}/>

      </Routes>
    </div>
  );
}

export default App
