import React, { useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import FormFilter from './form-filter';
import formataData from '../../_shared/formata-data';
import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
import spinnerContext from '../../components/spinner/spinnnerContext';
  
const RequisicaoCompra = () => {

  const { setSpinnerAtivo } = useContext(spinnerContext);

  const navigate = useNavigate();
  const { idMaster } = useParams();

  const tituloForm = 'Requisicão Compra'
  const dominio = 'requisicao-compra'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'empresaId', 'dataSolicitacao', 'depositoIdOrigem', 'depositoIdDestino']

  let filterTable = 'filter[]=statusItem||$ne||Entregue'

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
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Origem", accessor: "depositoNameOrigem", sortable: true },
          { label: "Destino", accessor: "depositoNameDestino", sortable: true },
          { label: "Data Solicitação", accessor: "dataSolicitacao", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Data Entrega", accessor: "dataEntrega", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Status", accessor: "statusItem", sortable: true }
        ]}

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {}, 
          fieldsForm:fieldsForm, 

          setSpinnerAtivo: (param) => setSpinnerAtivo(param),
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

          setSpinnerAtivo: (param) => setSpinnerAtivo(param),
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
          {label: "", nomeIcone: "fa-solid fa-rectangle-list", onClick: (params) => { navigate("/requisicao-compra-item/"+ params.id); }}
        ]}        

      />
    </>
  );
};
  
export default RequisicaoCompra;