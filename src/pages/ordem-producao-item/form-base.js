import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const OrdemProducaoItem = () => {

  const navigate = useNavigate();
  const { idMaster } = useParams();

  const tituloForm = 'Item da Ordem de Produção'
  const dominio = 'ordem-producao-item'
  const bodyBase = {}
  const fieldsForm = [
    'sequencia', 
    'produtoId',
    'estagioId',
    'quantidadeSolicitada',
    'unidadeMedidaId'
  ]

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Sequencia", accessor: "sequencia", sortable: false },
          { label: "Produto", accessor: "produtoName", sortable: true },
          { label: "Estágio", accessor: "estagioName", sortable: true },
          { label: "Qtd Solicitada", accessor: "quantidadeSolicitada", sortable: true },
          { label: "Und", accessor: "unidadeMedidaSigla", sortable: true }
        ]}

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {
            ordemProducaoId: idMaster
          }, 
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
          bodyBase: { 
            id: params.id,
            ordemProducaoId: idMaster
          }, 
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
          {label: "Ordens", onClick: (params) => { navigate("/ordem-producao"); }}
        ]}        

      />
    </>
  );
};
  
export default OrdemProducaoItem;