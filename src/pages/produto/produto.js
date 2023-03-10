import React from 'react';
import { useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';

import FormAdd from './form-add';
import FormEdit  from './form-edit';
import FormView  from './form-view';
  
const Produto = () => {

  const navigate = useNavigate();

  return (
    <>
      <h4 className='p-3'>
        Produto
      </h4>
      <MyTabsForm
        dominio="produto"

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Unidade Medida", accessor: "unidadeMedidaSigla", sortable: true },
          { label: "Unidade Compra", accessor: "unidadeMedidaCompraSigla", sortable: true },
          { label: "Description", accessor: "description", sortable: true }
        ]}

        add={ (params) => (<FormAdd callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[
          {label: "Componentes", onClick: (params) => { navigate("/produto-componente/"+ params.id); }}
        ]}        

      />
    </>
  );
};
  
export default Produto;