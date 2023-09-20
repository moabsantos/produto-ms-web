import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";

import getApi from '../../_shared/req-get-http';
import formataNumero from '../../_shared/formata-numero';

import MyFormBase from '../../layout/MyFormBase';
import LocalForm from './LocalForm';
  
const ProdutoComponenteParte = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();
  const [produtoComponente, setProdutoComponente] = useState({})
  const dominio = 'produto-componente-parte'

  useEffect(() => {

    getApi({ url: process.env.REACT_APP_HOST_API + '/produto-componente/' + idMaster })
    .then((resp) => {
      setProdutoComponente({
        produtoId: resp.data[0].produtoId,
        produto: resp.data[0].produtoId +' - '+ resp.data[0].produtoName,
        estagio: resp.data[0].estagioId +' - '+ resp.data[0].estagioName,
        item: resp.data[0].componenteId +' - '+ resp.data[0].componenteName,
        consumo: formataNumero({valor: resp.data[0].consumoProducao, format: 'c0,4'}) +' ('+ resp.data[0].unidadeMedidaConsumoSigla +')'
      })
    })

    return () => {};
  }, [idMaster]);

  return (
    <>
      <MyFormBase

        idMaster={idMaster}

        buttonsTop={[

          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/produto-componente/"+ produtoComponente.produtoId); }}
        ]}
        
        tituloForm={"Partes do Componente da Ficha"}
        dominio={dominio}

        filterList={'filter=produtoComponenteId||$eq||'+ idMaster}

        headForm={[
          {key: "Produto", value: produtoComponente.produto},
          {key: "Estagio", value: produtoComponente.estagio},
          {key: "Item", value: produtoComponente.item},
          {key: "Consumo", value: produtoComponente.consumo}
        ]}

        columnsTable={[
          { label: "Sequencia", accessor: "sequencia", sortable: true },
          { label: "Quantidade", accessor: "quantidade", sortable: true, formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,4'})} },
          { label: "Consumo (X)", accessor: "consumoX", sortable: true, formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,4'})} },
          { label: "Consumo (Y)", accessor: "consumoY", sortable: true, formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,4'})} },
          { label: "Consumo", accessor: "consumo", sortable: true, formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,4'})} },
          { label: "Nome da Parte", accessor: "nomeParte", sortable: true },
          { label: "Descrição", accessor: "description", sortable: true }
        ]}

        buttonsAdd={[]}

        bodyBase={{
          produtoComponenteId: idMaster
        }}

        fieldsForm={['sequencia', 'quantidade', 'consumoX', 'consumoY', 'nomeParte', 'description']}
        bodyFormated={(payload) => {
          payload.quantidade = formataNumero({valor: payload.quantidade, format: 'c0.'})
          payload.consumoX = formataNumero({valor: payload.consumoX, format: 'c0.'})
          payload.consumoY = formataNumero({valor: payload.consumoY, format: 'c0.'})
          return payload
        }}

        LocalForm={LocalForm}
        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default ProdutoComponenteParte;