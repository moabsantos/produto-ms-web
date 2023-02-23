import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';

import FormAdd from './form-add';
import FormEdit  from './form-edit';
import FormView  from './form-view';
  
const FichaTenica = () => {
  return (
    <>
      <h4 className='p-3'>
      Ficha-Tenica
      </h4>
      <MyTabsForm
        dominio="ficha-tecnica"

        headers={(<>
          <th>Nome</th>
          <th>Unidade</th>
          <th>Descricao</th>
          <th></th>
        </>)}

        getItems={
          (props)=>{
            return(<>
            <td>{props.item.name}</td>
            <td>{props.item.unidadeMedidaSigla}</td>
            <td>{props.item.description}</td>
            </>)
          }
        }

        add={ (params) => (<FormAdd callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default FichaTenica;