import React from 'react';
import { useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
  
const Cliente = () => {

  const dominio = 'cliente'
  const navigate = useNavigate();

  return (
    <>
      <h4 className='p-3'>
        Cliente
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
          {label: "Estab", nomeIcone: "fa-solid fa-map-location-dot", onClick: (params) => { navigate("/cliente-estabelecimento/"+ params.id); }}
        ]}

        />
    </>
  );
};
  
export default Cliente;