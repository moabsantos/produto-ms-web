import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import formataNumero from '../../_shared/formata-numero';
import formataData from '../../_shared/formata-data';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
import getApi from '../../_shared/req-get-http';
import postApi from '../../_shared/req-post-http';

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
  const [depositoMaster, setDepositoMaster] = useState("")
  const [destinoMaster, setDestinoMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDepositoMaster(resp.data[0].depositoCodeOrigem +' - '+ resp.data[0].depositoNameOrigem)
      setDestinoMaster(resp.data[0].depositoCodeDestino +' - '+ resp.data[0].depositoNameDestino)
    })

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>

      <div className='p-3'>
        <table className="table table-bordered">
          <thead><tr><th>Requisição</th><th>Depósito Origem</th><th>Depósito Destino</th></tr></thead>
          <tbody><tr><td>{idMaster}</td><td>{depositoMaster}</td><td>{destinoMaster}</td></tr></tbody>
        </table>
      </div>

      <MyTabsForm
        dominio={dominio}
        filterList={filterList}
        idMaster={idMaster}

        buttonsTop={[

          {label: "", labelPopover: "Aprovar Requisição", nomeIcone: "fa-regular fa-thumbs-up", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/aprovacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}})
            .then(() => navigate("/" + dominioMaster))
            
          }},
          {label: "", labelPopover: "Cancelar Aprovação da Requisição", nomeIcone: "fa-regular fa-thumbs-down", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/cancelar-aprovacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},    
          {label: "", labelPopover: "Separar Requisição", nomeIcone: "fa-solid fa-check-to-slot", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/separacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},
          {label: "", labelPopover: "Cancelar Separação da Requisição", nomeIcone: "fa-solid fa-inbox", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/cancelar-separacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},
          {label: "", labelPopover: "Confirmar entrega da Requisição", nomeIcone: "fa-solid fa-truck-fast", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/atendimento/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},          

          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        columns={[    
          { label: "Seq", accessor: "sequencia", sortable: false, alignCell:"right" },
          { label: "Item", accessor: "itemName", sortable: false },
          { label: "Qtd. Solicitada", accessor: "quantidadeSolicitada", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Qtd. Entregue", accessor: "quantidadeEntregue", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: false },
          { label: "Entrega", accessor: "dataEntrega", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Setor", accessor: "setorName", sortable: false },
          { label: "Status", accessor: "statusItem", sortable: false },
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
          {label: "", nomeIcone: "fa-solid fa-square-check", onShow: (b, i) => {
            b.nomeIcone = i.idUserSelecao === 0 ? "fa-regular fa-square" : "fa-solid fa-square-check"
            return b
          }, onClick: (params, callBack) => { 

              postApi({url: `${process.env.REACT_APP_HOST_API}/requisicao-almoxarifado-item/selecao/item`, body: {id: params.id}})
                
                .then((resp) => callBack({
                  iconeBotao: resp.idUserSelecao === 0 ? "fa-regular fa-square" : "fa-solid fa-square-check"
                }))
          
          }}
        ]}         

      />
    </>
  );
};
  
export default RequisicaoAlmoxarifadoItem;