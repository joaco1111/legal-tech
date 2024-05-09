import { useEffect, useState} from "react";
// import { validar } from "../../utils/validacion";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setUserToken } from "../../redux/actions";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setAuth } from "../../redux/actions";
// import { ClickHandlerCrear, ClickHandlerRecordatorio, Loginf } from "../../handlers/login";


const Login = ({ clickHandlerRecordatorio, clickHandlerCrear, Loginf }) => {
  const [userData, setUserData] = useState({
    cedula: "",
    password: "",
  });

  const [errores, setErrores] = useState({
    cedula: "",
    password: "",
  });

  const [profile, setProfile] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userToken = useSelector((state) => state.userToken);
  const handleChange = (e) => {
    // setErrores(validar({ ...userData, [e.target.name]: e.target.value }));

    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Loginf(userData);
  };

  const responseMessage = (response) => {
    dispatch(setAuth(true));

    // Loginf();
    dispatch(setUserToken(response.credential));
    navigate("/home");
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (userToken) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userToken]);

  return (
    <div className="containerLogin">
      <form onSubmit={submitHandler}>
        <table>
          <tr>
            <td></td>
            <td colSpan={2} className="celdas">
              {/* <img
                src={logo}
                alt="Logo Legaltech"
                style={{ height: "90px", width: "100%" }}
              /> */}
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="usuario" className="label">
                Usuario:
              </label>
            </td>
            <td>
              <input
                type="number"
                name="cedula"
                id="username"
                //className="cajausuario"
                placeholder="Ingrese su Usuario"
                value={userData.cedula}
                onChange={handleChange}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {errores.cedula !== "" && (
                <h5 className="errores">{errores.cedula}</h5>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label className="label" htmlFor="password">
                Contraseña:
              </label>
            </td>
            <td>
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={userData.password}
                onChange={handleChange}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={4}>
              {errores.password !== "" && (
                <h5 className="errores">{errores.password}</h5>
              )}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="tipodeusuario">Tipo de usuario:</label>
            </td>
            <td>
              <select name="tipodeusuario" id="idusuario">
                <option value="">Elija una opcion</option>
                <option value="1">Administrador</option>
                <option value="2">Abogado</option>
                <option value="3">Cliente</option>
              </select>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <br></br>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="celdas"></td>
            <td className="celdas">
              <input
                type="button"
                name="cancelar"
                value="Cancelar"
                className="botonesiniciosesion"
              />
            </td>
            <td className="celdas">
              {" "}
              {errores.cedula || errores.password ? null : (
                <input
                  type="submit"
                  value="Ingresar"
                  className="botonesiniciosesion"
                />
              )}
            </td>
            <td className="celdas"></td>
          </tr>
          <tr>
            <td></td>
            <td className="celdas">
              {/* <Link to={"/crearusuario"} onClick={clickHandlerCrear}>
                <button className="botonesiniciosesion">Crear Usuario</button>
              </Link> */}
              <input
                type="button"
                name="crearusuario"
                value="Crear Usuario"
                className="botonesiniciosesion"
                onClick={clickHandlerCrear}
              />
            </td>
            <td className="celdas">
              <input
                type="button"
                name="password"
                value="¿Olvidó su contraseña?"
                className="botonesiniciosesion"
                onClick={clickHandlerRecordatorio}
              />
              {/* </Link> */}
            </td>
            <td></td>
          </tr>
        </table>
      </form>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};
export default Login;
