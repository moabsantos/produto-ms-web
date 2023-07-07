import { useNavigate } from "react-router-dom";
import GoogleAuth from "../../components/GoogleAuth";

export default function AuthUsuarioLogin() {

  const navigate = useNavigate();

  localStorage.removeItem("tokenGoogle");

  return (
    <>
      <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/home" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <div className="bi d-block mb-1" style={{textAlign: "center"}}><i className="fa-solid fa-signal fa-2x" width="24" height="24"></i></div>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
              </li>
              <li>
                <GoogleAuth onSucesso={(data) => navigate('/usuario-perfil')} /> Login
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div className="card text-center">
      <div className="card-header">
        <b>QUEAVANCA</b> é o lugar onde os processos são simplificados sem perder o valor
      </div>
      <div className="card-body">
        <h5 className="card-title"> </h5>
        <img src="ico.png" class="img-fluid float-left" style={{maxHeight:400}} alt="" />
        
        
      </div>
      <div className="card-footer text-muted">
        MSoftware - Construindo soluções e simplificando processos
      </div>
    </div>
  </>
  )
}
