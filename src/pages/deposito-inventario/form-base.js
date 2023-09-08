import React  from 'react';
import { useNavigate } from "react-router-dom";

import MyFormBase from '../../layout/MyFormBase';
import formataData from '../../_shared/formata-data';
import LocalForm from './LocalForm';
import FormFilter from './form-filter';
import postApi from '../../_shared/req-post-http';
  
const DepositoInventario = () => {

  const navigate = useNavigate();

  const dominio = 'deposito-inventario'
  const fieldsForm = ['depositoId', 'depositoInventarioId', 'itemId', 'itemGrupoId', 'dataInicio', 'sequencia', 'itemPartialName']

  return (
    <>
      <MyFormBase

        tituloForm={"Gestão de Inventário"}
        dominio={dominio}
        idMaster={'0'}

        buttonsTop={[
          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/home"); }}
        ]}
        buttonsAdd={[
          {label: "", nomeIcone: "fa-solid fa-rectangle-list", onClick: (params) => { navigate("/deposito-inventario-item/"+ params.id); }},

          {label: "", nomeIcone: "fa-solid fa-trash-can", onClick: (params) => { 
            postApi({url: `${process.env.REACT_APP_HOST_API}/deposito-inventario-item/delete/inventario/${params.id}`, body: {}}) 
            navigate("/deposito-inventario-item/"+ params.id); 
          }}
        ]}

        columnsTable={[
          { label: "Empresa", accessor: "empresaSigla", sortable: true },
          { label: "Deposito", accessor: "depositoName", sortable: true },
          { label: "Grupo Item", accessor: "itemGrupoName", sortable: true },
          { label: "Item", accessor: "itemName", sortable: true },
          { label: "Data Inicio", accessor: "dataInicio", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Data Termino", accessor: "dataTermino", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          { label: "Status", accessor: "status", sortable: true },
        ]}

        fieldsForm={fieldsForm}
        bodyFormated={(payload) => {
          payload.dataInicio = formataData({data: payload.dataInicio, format: 'api-date'})
          return payload
        }}
        filterDefault={'filter[]=status||$ne||Finalizado&filter[]=status||$ne||Excluido'}
        FormFilter={FormFilter}
        LocalForm={LocalForm}

        FormView={() => (<></>)}
      />
    </>
  );
};
  
export default DepositoInventario;