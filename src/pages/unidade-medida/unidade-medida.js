import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
  
const UnidadeMedida = () => {
  return (
    <>
      <h4 className='p-3'>
        Unidade de Medida
      </h4>
      <MyTabsForm
        dominio="unidade-medida" 

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Descrição", accessor: "description", sortable: true },
          { label: "Sigla", accessor: "sigla", sortable: true }
        ]}

        add= {(params) => (<FormAdd callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default UnidadeMedida;