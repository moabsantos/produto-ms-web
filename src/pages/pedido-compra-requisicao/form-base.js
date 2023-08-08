import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";

import postApi from '../../_shared/req-post-http';
import getApi from '../../_shared/req-get-http';

import MyFormBase from '../../layout/MyFormBase';
  
const PedidoCompraRequisicao = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();
  const [pedido, setPedido] = useState({})
  const dominio = 'requisicao-compra-item'

  useEffect(() => {

    getApi({ url: process.env.REACT_APP_HOST_API + '/pedido-compra/' + idMaster })
    .then((resp) => {
      setPedido({
        code: resp.data[0].code,
        data: resp.data[0].dataSolicitacao,
        fornecedor: resp.data[0].fornecedorName
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
      
              postApi({url: `${process.env.REACT_APP_HOST_API}/pedido-compra-item/importar/requisicao-compra`, body: {id: idMaster}})
                
                .then((resp) => navigate("/pedido-compra"))
          
          }},

          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/pedido-compra"); }}
        ]}
        
        tituloForm={"Importação de Itens da Requisição para o Pedido"}
        dominio={dominio}
        filterList={'filter=statusItem||$eq||Aprovado&filter=pedidoCompraId||$eq||0'}

        headForm={[
          {key: "Pedido", value: pedido.code},
          {key: "Data", value: pedido.data},
          {key: "Fornecedor", value: pedido.fornecedor},
        ]}

        columnsTable={[
          { label: "Cód. Item", accessor: "itemCode", sortable: true },
          { label: "Item", accessor: "itemName", sortable: true },
          { label: "Solicitado", accessor: "quantidadeSolicitada", sortable: true },
          { label: "Setor", accessor: "setorName", sortable: true },
        ]}

        addBotaoSelecao={true}
        buttonsAdd={[

          {label: "", nomeIcone: "fa-solid fa-square-check", onShow: (b, i) => {
            b.nomeIcone = i.idUserSelecao === 0 ? "fa-regular fa-square" : "fa-solid fa-square-check"
            return b
          }, onClick: (params, callBack) => { 
      
              postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/selecao/item`, body: {id: params.id}})
                
                .then((resp) => callBack({
                  iconeBotao: resp.idUserSelecao === 0 ? "fa-regular fa-square" : "fa-solid fa-square-check"
                }))
          
          }}

        ]}

        bodyBase={{}}

        fieldsForm={[]}

        removeInclusao={true}
        removeEdicao={true}
        LocalForm={() => (<></>)}
        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default PedidoCompraRequisicao;