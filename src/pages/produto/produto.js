import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';

import FormAdd from './form-add';
import FormEdit  from './form-edit';
import FormView  from './form-view';
  
const Produto = () => {
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
          { label: "Description", accessor: "description", sortable: true }
        ]}

        add={ (params) => (<FormAdd callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default Produto;