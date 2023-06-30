import React from 'react';
import { useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
  
const GrupoAcesso = () => {
  const navigate = useNavigate();
  const dominio = 'grupo-acesso'

  return (
    <>
      <h4 className='p-3'>
        Grupo Acesso
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Descrição", accessor: "description", sortable: true },
          { label: "Sigla", accessor: "sigla", sortable: true }
        ]}

        add= {(params) => (<FormAdd dominio={dominio} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} 
        
        buttonsAdd={[

          {label: "", nomeIcone: "fa-solid fa-lock", onClick: (params) => { navigate("/grupo-acesso-permissao/"+ params.id); }},

          {label: "", nomeIcone: "fa-regular fa-user", onClick: (params) => { navigate("/grupo-acesso-usuario/"+ params.id); }}
        
        ]}
        
        />
    </>
  );
};
  
export default GrupoAcesso;