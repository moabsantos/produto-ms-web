import { useState, useEffect, useContext } from 'react'

import getApi from '../_shared/req-get-http';
import spinnerContext from '../components/spinner/spinnnerContext';

const Header = () => {

  const { setSpinnerAtivo } = useContext(spinnerContext);

  const urlProfile = `${process.env.REACT_APP_HOST_API}/auth/profile`

  const [picture, setPicture] = useState("")
  const [emailUser, setEmailUser] = useState("")
  const [nameUser, setNameUser] = useState("")
  const [nameEmpresa, setNameEmpresa] = useState("")
  const [nameGrupo, setNameGrupo] = useState("")

  useEffect(() => {

    getApi({ url: urlProfile, setSpinnerAtivo: (param) => setSpinnerAtivo(param) }).then((resp) => {
      
      if (resp){
        setPicture(resp.picture)
        setEmailUser(resp.email)
        setNameUser(resp.name)
        setNameEmpresa(resp.empresaName)
        setNameGrupo(resp.grupoName)
      }
    })

  }, [urlProfile, setSpinnerAtivo])

  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <div className="bi d-block mb-1" style={{textAlign: "center"}}><img src={picture} alt=""></img></div>
            </a>

            <div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title text-uppercase">{nameEmpresa}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{nameGrupo}</h6>
                <p className="card-text">{nameUser} {emailUser}</p>
              </div>
            </div>


            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="/home" className="nav-link text-white">
                  <div className="bi d-block mb-1" style={{textAlign: "center"}}><i className="fa-solid fa-house fa-2x" width="24" height="24"></i></div>
                  Home
                </a>
              </li>
              <li>
                <a href="/auth-usuario-login" className="nav-link text-white">
                  <div className="bi d-block mb-1" style={{textAlign: "center"}}><i className="fa-solid fa-door-open fa-2x" width="24" height="24"></i></div>
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">

          </form>

          <div className="text-end">

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;