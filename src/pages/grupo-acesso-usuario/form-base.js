import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import MyFormSubmit from '../../layout/MyFormSubmit';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
import delApi from '../../_shared/req-del-http';
import getApi from '../../_shared/req-get-http';

const GrupoAcessoUsuario = () => {

  const { idMaster } = useParams();
  const navigate = useNavigate();

  const tituloForm = 'Usuários do Grupo de Acesso'
  const dominio = 'grupo-acesso-usuario'
  const bodyBase = {}

  const fieldsForm = ['userEmail', 'empresaId']

  const filterList = 'filter=grupoAcessoId||$eq||'+ idMaster

  const dominioMaster = 'grupo-acesso'
  const [dadosMaster, setDadosMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDadosMaster(resp.data[0] ? resp.data[0].name : null)
    })

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        {tituloForm}
        </div>
      {dadosMaster}
      </h4>

      <MyTabsForm
        dominio={dominio}
        filterList={filterList}
        idMaster={idMaster}
        dominioMaster={dominioMaster}

        columns={[    
          { label: "Cod. Emp", accessor: "empresaCode", sortable: false },
          { label: "Nome Empresa", accessor: "empresaName", sortable: false },

          { label: "Email", accessor: "userEmail", sortable: false },
          { label: "Nome do Usuário", accessor: "userName", sortable: false },
        ]}

        add={(params) => MyFormSubmit({ 

          dominio: dominio, 
          bodyBase: {
            grupoAcessoId: idMaster
          }, 
          fieldsForm:fieldsForm, 

          callBusca: () => params.callBusca(),

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } 
            />
          )

        })}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
        
        buttonsAdd={[
          {label: "", nomeIcone: "fa-solid fa-trash-can", onClick: (params) => { 
            delApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/${params.id}`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            navigate("/grupo-acesso-usuario/"+ idMaster); 
          }}
        ]}
      />
    </>
  );
};
  
export default GrupoAcessoUsuario;