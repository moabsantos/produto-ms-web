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
import DialogModal from '../../components/DialogModal';

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
  const [codeMaster, setCodeMaster] = useState("")
  const [depositoMaster, setDepositoMaster] = useState("")
  const [destinoMaster, setDestinoMaster] = useState("")
  const [statusMaster, setStatusMaster] = useState("")

  const [dialogAtendimento, setDialogAtendimento] = useState(false)
  const [recebedor, setRecebedor] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setCodeMaster(resp.data[0].code)
      setDepositoMaster(resp.data[0].depositoCodeOrigem +' - '+ resp.data[0].depositoNameOrigem)
      setDestinoMaster(resp.data[0].depositoCodeDestino +' - '+ resp.data[0].depositoNameDestino)
      setStatusMaster(resp.data[0].statusItem)
    })

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>

      <div className='p-3'>
        <table className="table table-bordered">
          <thead><tr><th>Requisição</th><th>Depósito Origem</th><th>Depósito Destino</th><th>Status</th></tr></thead>
          <tbody><tr><td>{codeMaster}</td><td>{depositoMaster}</td><td>{destinoMaster}</td><td>{statusMaster}</td></tr></tbody>
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
          {label: "", className: "btn red-200", labelPopover: "Cancelar Aprovação da Requisição", nomeIcone: "fa-regular fa-thumbs-down", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/cancelar-aprovacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},   
          
          {isSeparator: true},

          {label: "", labelPopover: "Separar Requisição", nomeIcone: "fa-solid fa-cart-arrow-down", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/separacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},
          {label: "", className: "btn btn-soft-danger", labelPopover: "Cancelar Separação da Requisição", nomeIcone: "fa-solid fa-arrow-up-from-bracket", onClick: () => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/cancelar-separacao/full-list`, body: {requisicaoAlmoxarifadoId: idMaster}}) 
            .then(() => navigate("/" + dominioMaster))
          }},
          {label: "", labelPopover: "Confirmar entrega da Requisição", nomeIcone: "fa-solid fa-people-carry-box", onClick: () => { 
            setDialogAtendimento(true)
          }},          

          {isSeparator: true},

          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        columns={[    
          { label: "Seq", accessor: "sequencia", sortable: false, alignCell:"right" },
          { label: "Item", accessor: "itemName", sortable: false },
          { label: "Qtd. Solicitada", accessor: "quantidadeSolicitada", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,3'})} },
          { label: "Qtd. Entregue", accessor: "quantidadeEntregue", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,3'})} },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: false },
          { label: "Entrega", accessor: "dataEntrega", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Recebedor", accessor: "recebedor", sortable: false },
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

      <DialogModal isOpened={dialogAtendimento} 
        onProceed={() => {
                      postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/atendimento/full-list`, body: {requisicaoAlmoxarifadoId: idMaster, recebedor: recebedor}}) 
                      .then(() => navigate("/" + dominioMaster))
                    }
        } 
        onClose={() => setDialogAtendimento(false)}>
          <label>Informe o nome do Recebedor</label>
          <input type="Text" recebedor="" defaultValue={recebedor} onChange={e => setRecebedor(e.target.value)}></input>
      </DialogModal>
    </>
  );
};
  
export default RequisicaoAlmoxarifadoItem;