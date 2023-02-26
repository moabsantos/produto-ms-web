import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';
import formataData from '../../_shared/formata-data';

import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormFilter from './form-filter';
import FormView from './form-view';
  
const CustosMensais = () => {

  const dominio = 'custos-mensais'

  const dataAtual = formataData({format: 'new-date-json'})

  const filterTable = 
    'filter[]=ano||eq||'+dataAtual.ano +
    '&filter[]=mes||eq||'+dataAtual.mes

  return (
    <>
      <h4 className='p-3'>
        Custos Mês
      </h4>
      <MyTabsForm
        dominio={dominio}
        defaultFilter={filterTable}
        headers={(<>
          <th>Período</th>
          <th>Item</th>
          <th>Setor</th>
          <th>Unid</th>
          <th>Qtd</th>
          <th>Valor</th>
          <th></th>
        </>)}

        getItems={
          (props)=>{
            return(<>
             <td>{props.item.mes} / {props.item.ano}</td>
             <td>{props.item.itemDespesaName}</td>
             <td>{props.item.setorName}</td>
             <td>{props.item.unidadeMedidaSigla}</td>
             <td>{props.item.quantidadeRealizada}</td>
             <td>{props.item.valorRealizado}</td>
            </>)
          }
        }

        
        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }
        add= {(params) => (<FormAdd dominio={dominio} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default CustosMensais;