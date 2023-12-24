import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";

import postApi from '../../_shared/req-post-http';
import delApi from '../../_shared/req-del-http';
import getApi from '../../_shared/req-get-http';
import formataData from '../../_shared/formata-data';

import MyFormBase from '../../layout/MyFormBase';
import LocalForm from './LocalForm';
  
const ClienteEstabelecimento = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();
  const [cliente, setCliente] = useState({})
  const dominioMaster = 'cliente'
  const dominio = 'cliente-estabelecimento'

  useEffect(() => {

    getApi({ url: process.env.REACT_APP_HOST_API + '/cliente/' + idMaster })
    .then((resp) => {
      if (resp && resp.data.length === 1) setCliente({
        code: resp.data[0].code,
        name: resp.data[0].name,
        dataCadastro: formataData({data: resp.data[0].created_at, format: 'to-br-date'})
      })
    })

    return () => {};
  }, [idMaster]);

  return (
    <>
      <MyFormBase

        idMaster={idMaster}

        buttonsTop={[
          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/" + dominioMaster); }}
        ]}
        
        tituloForm={"Estabelecimentos"}
        dominio={dominio}

        filterList={'filter=clienteId||$eq||'+ idMaster}

        headForm={[
          {key: "Código", value: cliente.code},
          {key: "Nome", value: cliente.name},
          {key: "Data Cadastro", value: cliente.dataCadastro}
        ]}

        columnsTable={[
          { label: "Código", accessor: "code", sortable: true },
          { label: "CNPJ", accessor: "cnpj", sortable: true },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Cidade", accessor: "cidadeName", sortable: true },
          { label: "UF", accessor: "cidadeUfSigla", sortable: true },
          { label: "Cep", accessor: "cep", sortable: true },
          { label: "Dt Inclusão", accessor: "created_at", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Dt Ativação", accessor: "updated_at", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Dt Inativação", accessor: "deleted_at", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
        ]}

        buttonsAdd={[

          {label: "", nomeIcone: "fa-solid fa-power-off", onClick: (params) => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/reactive/${params.id}`, body: {representanteId: idMaster}}) 
            navigate("/cliente/"); 
          }},

          {label: "", nomeIcone: "fa-solid fa-trash-can", onClick: (params) => { 
            delApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/${params.id}`, body: {representanteId: idMaster}}) 
            navigate("/cliente/"); 
          }}

        ]}

        bodyBase={{
          clienteId: idMaster
        }}

        fieldsForm={['code', 'name', 'cnpj', 'inscricaoEstadual','telefone', 'email', 'endereco', 'numero', 'cep', 'bairro', 'description', 'cidadeId']}
        bodyFormated={(payload) => payload}

        LocalForm={LocalForm}
        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default ClienteEstabelecimento;