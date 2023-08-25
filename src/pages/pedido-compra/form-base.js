import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import FormFilter from './form-filter';
import formataData from '../../_shared/formata-data';
import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const PedidoCompra = () => {

  const navigate = useNavigate();
  const { idMaster } = useParams();

  const tituloForm = 'Pedido de Compra'
  const dominio = 'pedido-compra'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'empresaId', 'fornecedorId', 'formaPagamentoId', 
    'dataSolicitacao', 'depositoIdOrigem', 'depositoIdDestino']

  let filterTable = 'filter[]=statusItem||$ne||Cancelado&filter[]=statusItem||$ne||Enderecado'

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}

        defaultFilter={filterTable}
        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Emp", accessor: "empresaCode", sortable: true },
          { label: "Fornecedor", accessor: "fornecedorName", sortable: true },
          { label: "Form Pgto", accessor: "formaPagamentoSigla", sortable: true },
          { label: "Origem", accessor: "depositoCodeOrigem", sortable: true },
          { label: "Destino", accessor: "depositoCodeDestino", sortable: true },
          { label: "Data Solicitação", accessor: "dataSolicitacao", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Data Entrega", accessor: "dataEntrega", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Status", accessor: "statusItem", sortable: true }
        ]}

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {}, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.dataSolicitacao = formataData({data: payload.dataSolicitacao, format: 'api-date'})
            return payload
          },

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                idMaster={ idMaster }
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } 
            />
          )

        })}
        
        edit={(params) => MyFormSubmit({ 

          dominio: dominio, 
          bodyBase: { id: params.id}, 
          fieldsForm:fieldsForm, 

          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.dataSolicitacao = formataData({data: payload.dataSolicitacao, format: 'api-date'})
            return payload
          },

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                idMaster={ idMaster }
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } 
            />
          )

        })}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[
          {label: "", nomeIcone: "fa-solid fa-rectangle-list", onClick: (params) => { navigate("/pedido-compra-item/"+ params.id); }},
          {label: "", nomeIcone: "fa-solid fa-file-import", onClick: (params) => { navigate("/pedido-compra-requisicao/"+ params.id); }}
        ]}        

      />
    </>
  );
};
  
export default PedidoCompra;