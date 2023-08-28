import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";

import postApi from '../../_shared/req-post-http';
import delApi from '../../_shared/req-del-http';
import getApi from '../../_shared/req-get-http';
import formataData from '../../_shared/formata-data';

import MyFormBase from '../../layout/MyFormBase';
import LocalForm from './LocalForm';
  
const RepresentanteCliente = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();
  const [representante, setRepresentante] = useState({})
  const dominioMaster = 'representante'
  const dominio = 'representante-cliente'

  useEffect(() => {

    getApi({ url: process.env.REACT_APP_HOST_API + '/representante/' + idMaster })
    .then((resp) => {
      if (resp && resp.data.length === 1) setRepresentante({
        empresa: resp.data[0].empresaName,
        code: resp.data[0].code,
        name: resp.data[0].name,
        dataCadastro: formataData({data: resp.data[0].createdAt, format: 'to-br-date'})
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
        
        tituloForm={"Clientes Associados"}
        dominio={dominio}

        filterList={''}

        headForm={[
          {key: "Empresa", value: representante.empresa},
          {key: "Código", value: representante.code},
          {key: "Nome", value: representante.name},
          {key: "Data Cadastro", value: representante.dataCadastro}
        ]}

        columnsTable={[
          { label: "Código", accessor: "clienteCode", sortable: true },
          { label: "Cliente", accessor: "clienteName", sortable: true },
          { label: "Dt Inclusão", accessor: "created_at", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Dt Ativação", accessor: "updated_at", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Dt Inativação", accessor: "deleted_at", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
        ]}

        buttonsAdd={[

          {label: "", nomeIcone: "fa-solid fa-power-off", onClick: (params) => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/reactive/${params.id}`, body: {representanteId: idMaster}}) 
            navigate("/representante/"); 
          }},

          {label: "", nomeIcone: "fa-solid fa-trash-can", onClick: (params) => { 
            delApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/${params.id}`, body: {representanteId: idMaster}}) 
            navigate("/representante/"); 
          }}

        ]}

        bodyBase={{
          representanteId: idMaster
        }}

        removeEdicao={true}
        fieldsForm={['clienteId']}
        bodyFormated={(payload) => payload}

        LocalForm={LocalForm}
        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default RepresentanteCliente;