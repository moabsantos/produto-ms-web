import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
  
const Cidade = () => {

  const dominio = 'cidade'

  return (
    <>
      <h4 className='p-3'>
      Cidade
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "UF", accessor: "ufName", sortable: true },
          { label: "Pais", accessor: "paisName", sortable: true },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Descrição", accessor: "description", sortable: true },
          { label: "Sigla", accessor: "sigla", sortable: true }
        ]}

        add= {(params) => (<FormAdd dominio={dominio} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default Cidade;