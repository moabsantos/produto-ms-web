import React from 'react';
import { useParams } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import FormFilter from './form-filter';
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';
import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const DepositoSaldo = () => {

  const { idMaster } = useParams();

  const tituloForm = 'Saldo do Depósito'
  const dominio = 'deposito-saldo'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'empresaId', 'dataSolicitacao', 'depositoIdOrigem', 'depositoIdDestino']

  let filterTable = ''

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
          { label: "Empresa", accessor: "empresaSigla", sortable: false },
          { label: "Depósito", accessor: "depositoName", sortable: false },
          { label: "Disponível", accessor: "quantidadeDisponivel", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Requisitado", accessor: "quantidadeRequisitada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Separado", accessor: "quantidadeSeparada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Recebido", accessor: "quantidadeEntregue", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} }
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

        ]}        

      />
    </>
  );
};
  
export default DepositoSaldo;