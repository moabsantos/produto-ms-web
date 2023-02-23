import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
  
const Setor = () => {

  const dominio = 'setor'

  return (
    <>
      <h4 className='p-3'>
        Setor
      </h4>
      <MyTabsForm
        dominio={dominio}

        headers={(<>
          <th>Nome</th>
          <th>Sigla</th>
          <th>Descricao</th>
          <th></th>
        </>)}

        getItems={
          (props)=>{
            return(<>
             <td>{props.item.name}</td>
             <td>{props.item.sigla}</td>
             <td>{props.item.description}</td>
            </>)
          }
        }

        add= {(params) => (<FormAdd dominio={dominio} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default Setor;