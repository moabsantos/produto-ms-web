import React from 'react';
import MyFormSubmit from '../../layout/MyFormSubmit';

import MyTabsForm from '../../layout/MyTabsForm';
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

import FormView  from './form-view';
import FormFilter from './form-filter';
import LocalForm from './LocalForm';
  
const ProducaoDia = () => {

  const tituloForm = 'Produção Dia'
  const dominio = 'producao-dia'
  const bodyBase = {}
  const fieldsForm = ['data', 'itemProducaoId', 'unidadeMedidaId', 'setorId', 'quantidadeRealizada']
  const filterTable = 'filter[]=data||eq||'+ formataData({format:'new-date'})

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}
        defaultFilter={filterTable}

        columns={[    
          { label: "Data", accessor: "data", sortable: false, formataDado: (valorFormatar) => {return formataData({data: valorFormatar, format: 'to-br-date'})} },
          { label: "Produto / Serviço", accessor: "itemProducaoName", sortable: true },
          { label: "Setor", accessor: "setorName", sortable: true },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: true },
          { label: "Quantidade", accessor: "quantidadeRealizada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})}},
          { label: "Valor", accessor: "valorRealizado", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} }
        ]}
        
        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {}, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),
          
          bodyFormated: (payload) => {
            payload.data = formataData({data: payload.data, format: 'api-date'})
            return payload
          },
          
          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } 
            />
          )

        })}
        
        edit={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: { id: params.id
          }, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),
          bodyFormated: (payload) => {
            payload.data = formataData({data: payload.data, format: 'api-date'})
            return payload
          },

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
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
  
export default ProducaoDia;