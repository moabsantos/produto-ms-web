import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import formataNumero from '../../_shared/formata-numero';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
import getApi from '../../_shared/req-get-http';

const RequisicaoAlmoxarifadoItem = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();

  const tituloForm = 'Requisicão Almoxarifado - Item'
  const dominio = 'requisicao-almoxarifado-item'
  const bodyBase = {}

  const fieldsForm = [
    'itemId', 'unidadeMedidaId', 
    'setorId', 'sequencia', 'quantidadeSolicitada', 'description']

  const filterList = 'filter=requisicaoAlmoxarifadoId||$eq||'+ idMaster

  const dominioMaster = 'requisicao-almoxarifado'
  const [dadosMaster, setDadosMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDadosMaster(resp.data[0].name)
    })

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        {tituloForm}
        </div>
      {dadosMaster}
      </h4>

      <MyTabsForm
        dominio={dominio}
        filterList={filterList}
        idMaster={idMaster}

        buttonsTop={[
          {label: "", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        columns={[    
          { label: "Seq", accessor: "sequencia", sortable: false, alignCell:"right" },
          { label: "Item", accessor: "itemName", sortable: false },
          { label: "Qtd. Solicitada", accessor: "quantidadeSolicitada", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Qtd. Entregue", accessor: "quantidadeEntregue", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: false },
          { label: "Data Entrega", accessor: "dataEntrega", sortable: true },
          { label: "Setor", accessor: "setorName", sortable: false },
        ]}

        add={(params) => MyFormSubmit({ 

          dominio: dominio, 
          bodyBase: {
            requisicaoAlmoxarifadoId: idMaster
          }, 
          fieldsForm:fieldsForm, 

          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.quantidadeSolicitada = formataNumero({valor:payload.quantidadeSolicitada, format: 'c0.'})
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

          bodyBase: { 
            id: params.id,
            requisicaoAlmoxarifadoId: idMaster
          }, 

          fieldsForm:fieldsForm, 

          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.quantidadeSolicitada = formataNumero({valor:payload.quantidadeSolicitada, format: 'c0.'})
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
  
export default RequisicaoAlmoxarifadoItem;