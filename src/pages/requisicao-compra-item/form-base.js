import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import formataNumero from '../../_shared/formata-numero';
import formataData from '../../_shared/formata-data';

import postApi from '../../_shared/req-post-http';
import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
import getApi from '../../_shared/req-get-http';

const RequisicaoCompraItem = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();

  const tituloForm = 'Requisicão Compra - Item'
  const dominio = 'requisicao-compra-item'
  const bodyBase = {}

  const fieldsForm = [
    'itemId', 'unidadeMedidaId', 
    'setorId', 'sequencia', 'quantidadeSolicitada', 'description']

  const filterList = 'filter=requisicaoCompraId||$eq||'+ idMaster

  const dominioMaster = 'requisicao-compra'
  const [dadosMaster, setDadosMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDadosMaster({
        code: resp.data[0].code, 
        data: formataData({data: resp.data[0].dataSolicitacao, format: 'to-br-date'}), 
        destino: resp.data[0].depositoNameDestino, 
        status: resp.data[0].statusItem})
    })

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>

      <div className='p-3'>
        <table className="table table-bordered">
          <thead><tr><th>Requisição</th><th>Data</th><th>Depósito Destino</th><th>Status</th></tr></thead>
          <tbody><tr><td>{dadosMaster.code}</td><td>{dadosMaster.data}</td><td>{dadosMaster.destino}</td><td>{dadosMaster.status}</td></tr></tbody>
        </table>
      </div>

      <MyTabsForm
        dominio={dominio}
        filterList={filterList}
        idMaster={idMaster}

        buttonsTop={[
          {label: "", labelPopover: "Cancelar Requisição", nomeIcone: "fa-solid fa-trash", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/cancelar-requisicao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}})
            .then(() => navigate("/" + dominioMaster))
            
          }},
          {label: "", labelPopover: "Aprovar Requisição", nomeIcone: "fa-regular fa-thumbs-up", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/aprovacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}})
            .then(() => navigate("/" + dominioMaster))
            
          }},
          {label: "", labelPopover: "Cancelar Aprovação da Requisição", nomeIcone: "fa-regular fa-thumbs-down", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/cancelar-aprovacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},    

          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        columns={[    
          { label: "Seq", accessor: "sequencia", sortable: false, alignCell:"right" },
          { label: "Item", accessor: "itemName", sortable: false },
          { label: "Qtd. Solicitada", accessor: "quantidadeSolicitada", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: false },
          { label: "Setor", accessor: "setorName", sortable: false },
          { label: "Status", accessor: "statusItem", sortable: false },
          { label: "Pedido Compra", accessor: "pedidoCompraCode", sortable: false },
        ]}

        add={(params) => MyFormSubmit({ 

          dominio: dominio, 
          bodyBase: {
            requisicaoCompraId: idMaster
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
            requisicaoCompraId: idMaster
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
          {label: "", nomeIcone: "fa-solid fa-square-check", onShow: (b, i) => {
            b.nomeIcone = i.idUserSelecao === 0 ? "fa-regular fa-square" : "fa-solid fa-square-check"
            return b
          }, onClick: (params, callBack) => { 

              postApi({url: `${process.env.REACT_APP_HOST_API}/requisicao-compra-item/selecao/item`, body: {id: params.id}})
                
                .then((resp) => callBack({
                  iconeBotao: resp.idUserSelecao === 0 ? "fa-regular fa-square" : "fa-solid fa-square-check"
                }))
          
          }}
        ]}        

      />
    </>
  );
};
  
export default RequisicaoCompraItem;