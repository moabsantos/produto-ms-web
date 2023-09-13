import React from 'react';
import { useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';

import FormFilter from './form-filter';
import FormAdd from './form-add';
import FormEdit  from './form-edit';
import FormView  from './form-view';
  
const Produto = () => {

  const navigate = useNavigate();

  const filterTable = ''

  return (
    <>
      <h4 className='p-3'>
        Produto
      </h4>
      <MyTabsForm
        dominio="produto"
        defaultFilter={filterTable}

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Un Medida", accessor: "unidadeMedidaSigla", sortable: true },
          { label: "Un Compra", accessor: "unidadeMedidaCompraSigla", sortable: true },
          { label: "Description", accessor: "description", sortable: true },
          { label: "Cod Grupo", accessor: "produtoGrupoCode", sortable: true },
          { label: "Grupo de Produto", accessor: "produtoGrupoName", sortable: true }
        ]}

        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }
        add={ (params) => (<FormAdd callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[
          {label: "", nomeIcone: "fa-solid fa-rectangle-list", onClick: (params) => { navigate("/produto-componente/"+ params.id); }},
          {label: "", nomeIcone: "fa-regular fa-money-bill-1", onClick: (params) => { navigate("/produto-preco/"+ params.id); }}
        ]}        

      />
    </>
  );
};
  
export default Produto;