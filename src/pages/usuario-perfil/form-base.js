import React from 'react';
import { useState, useEffect } from 'react'

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import postApi from '../../_shared/req-post-http';
import { useNavigate } from 'react-router-dom';
  
import getApi from '../../_shared/req-get-http';

const UsuarioPerfil = () => {


  const urlImage = `${process.env.REACT_APP_HOST_API}/auth/profile`
  const urlRealmUser = `${process.env.REACT_APP_HOST_API}/realm-user`

  const [picture, setPicture] = useState("")
  const [emailUser, setEmailUser] = useState("")
  const [nameUser, setNameUser] = useState("")

  useEffect(() => {

    getApi({ url: urlImage }).then((resp) => {
      
      if (resp){
        setPicture(resp.picture)
        setEmailUser(resp.email)
        setNameUser(resp.name)
      }
    })

  }, [urlImage, urlRealmUser])


  const navigate = useNavigate();
  const tituloForm = 'Perfil do Usuário'
  const dominio = 'user/perfil'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'description']

  return (
    <>
      <header>
        <div className="px-3 py-2 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <div className="bi d-block mb-1" style={{textAlign: "center"}}><img src={picture} alt=""></img></div>
              </a>

              <div className="d-flex align-items-auto my-2 my-lg-0 me-lg-auto text-white text-decoration-none">{nameUser}<br/>{emailUser}</div>

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
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Id", accessor: "id", sortable: false },
          { label: "Empresa", accessor: "empresaName", sortable: true },
          { label: "Grupo de Acesso", accessor: "grupoAcessoName", sortable: true }
        ]}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[

          {label: "", nomeIcone: "fa-solid fa-arrow-right", onClick: (p) => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/user/perfil`, body: {realmId: p.id}}).then(() => {
              navigate("/home");
            })  
          }}

        ]}   

      />
    </>
  );
};
  
export default UsuarioPerfil;