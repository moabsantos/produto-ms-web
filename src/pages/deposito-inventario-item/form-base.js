import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";

import postApi from '../../_shared/req-post-http';
import getApi from '../../_shared/req-get-http';
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

import MyFormBase from '../../layout/MyFormBase';
import LocalForm from './LocalForm';
  
const DepositoInventarioItem = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();
  const [inventario, setInventario] = useState({})
  const dominio = 'deposito-inventario-item'

  useEffect(() => {

    getApi({ url: process.env.REACT_APP_HOST_API + '/deposito-inventario/' + idMaster })
    .then((resp) => {
      setInventario({
        empresa: resp.data[0].empresaName,
        depositoId: resp.data[0].depositoId,
        deposito: resp.data[0].depositoName,
        grupoItem: resp.data[0].itemGrupoName,
        item: resp.data[0].itemName,
        status: resp.data[0].status,
        dataInicio: formataData({data: resp.data[0].dataInicio, format: 'to-br-date'}),
        dataTermino: formataData({data: resp.data[0].dataTermino, format: 'to-br-date'})
      })
    })

    return () => {};
  }, [idMaster]);

  return (
    <>
      <MyFormBase

        idMaster={idMaster}

        buttonsTop={[

          {label: "", nomeIcone: "fa-solid fa-file-import", onClick: (params, callBack) => { 
              postApi({url: `${process.env.REACT_APP_HOST_API}/deposito-inventario-item/importar/saldo`, body: {depositoInventarioId: idMaster}})                
                .then((resp) => navigate("/deposito-inventario/"))
          }},

          {label: "", nomeIcone: "fa-regular fa-thumbs-up", onClick: (params, callBack) => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/deposito-inventario-item/iniciar/contagem`, body: {depositoInventarioId: idMaster}})                
              .then((resp) => navigate("/deposito-inventario/"))
          }},

          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/deposito-inventario"); }}
        ]}
        
        tituloForm={"Itens Inventariados"}
        dominio={dominio}
        dominioEdicao={dominio + '/informar/contagem'}

        filterList={'filter=status||$ne||Excluido&filter=depositoInventarioId||$eq||'+ idMaster}

        headForm={[
          {key: "Empresa", value: inventario.empresa},
          {key: "Deposito", value: inventario.deposito},
          {key: "Grupo Item", value: inventario.grupoItem},
          {key: "Item", value: inventario.item},
          {key: "Inicio", value: inventario.dataInicio},
          {key: "Termino", value: inventario.dataTermino},
          {key: "Status", value: inventario.status}
        ]}

        columnsTable={[
          { label: "Cód. Item", accessor: "itemCode", sortable: true },
          { label: "Item", accessor: "itemName", sortable: true },
          { label: "Imagem", accessor: "quantidadeImagem", sortable: true, formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,4'})} },
          { label: "Contagem", accessor: "quantidadeContagem", sortable: true, formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,4'})} },
          { label: "Status", accessor: "status", sortable: true },
        ]}

        addBotaoSelecao={true}
        buttonsAdd={[

          {label: "", nomeIcone: "fa-solid fa-shuffle", onClick: (params, callBack) => { 
              postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/aplicar/contagem`, body: {id: params.id, depositoInventarioId: idMaster}})
                .then((resp) => callBack({
                    iconeBotao: "fa-solid fa-expand"
                }))
          }}

        ]}

        bodyBase={{
          depositoInventarioId: idMaster
        }}

        fieldsForm={['quantidadeContagem']}
        bodyFormated={(payload) => {
          payload.quantidadeContagem = formataNumero({valor: payload.quantidadeContagem, format: 'c0.'})
          return payload
        }}

        removeInclusao={true}
        LocalForm={LocalForm}
        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default DepositoInventarioItem;