import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import postApi from '../../_shared/req-post-http';
import { useNavigate } from 'react-router-dom';
  
const UsuarioPerfil = () => {

  const navigate = useNavigate();
  const tituloForm = 'Perfil do Usuário'
  const dominio = 'user/perfil'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'description']

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Id", accessor: "id", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Description", accessor: "description", sortable: true }
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