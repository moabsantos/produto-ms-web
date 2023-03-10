import React from 'react';
import { useNavigate } from "react-router-dom";

import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView from './form-view';
import MyFormSubmit from '../../layout/MyFormSubmit';
import LocalForm from './LocalForm';
import FormFilter from './form-filter';
  
const PedidoVenda = () => {

  const navigate = useNavigate();

  const idMaster = 0;
  const dominio = 'pedido-venda'
  const bodyBase = {}
  const fieldsForm = [
      'code', 'clienteId', 'clienteEstabelecimentoId', 'pedidoStatusId', 'prioridadeId', 'description']
  const filterTable = 'filter[]=pedidoStatusflagFinalizado||eq||0'

  return (
    <>
      <h4 className='p-3'>
      Pedido Venda
      </h4>
      <MyTabsForm
        dominio={dominio}
        defaultFilter={filterTable}

        columns={[    
          { label: "Data", accessor: "created_at", sortable: false, formataDado: (valorFormatar) => {return formataData({data: valorFormatar, format: 'to-br-date'})} },
          { label: "Prioridade", accessor: "prioridadeName", sortable: true },
          { label: "Cliente", accessor: "clienteName", sortable: true },
          { label: "Cidade", accessor: "cidadeName", sortable: true },
          { label: "Quantidade", accessor: "quantidadeItens", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Desconto", accessor: "valorDesconto", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Valor Total", accessor: "valorTotal", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Status", accessor: "pedidoStatusName", sortable: true },
        ]}

        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {}, 
          fieldsForm:fieldsForm,
          callBusca: () => params.callBusca(),

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                idMaster={ idMaster }
                callBusca={ () => par.callBusca() }
                dataForm={ params.dataForm } 
            />
          )
        })}
        
        edit={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: { id: params.id }, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } }  
                idMaster={ idMaster }
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } />
          )

        })}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[
          {label: "Itens", onClick: (params) => { navigate("/pedido-venda-item/"+ params.id); }}
        ]}
      
      />
    </>
  );
};
  
export default PedidoVenda;