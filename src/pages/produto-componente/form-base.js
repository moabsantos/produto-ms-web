import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';

import getApi from '../../_shared/req-get-http';
import formataNumero from '../../_shared/formata-numero';
  
const ProdutoComponente = () => {

  const navigate = useNavigate();
  const { idMaster } = useParams();

  const dominio = 'produto-componente'
  const filterList = 'filter=produtoId||$eq||'+ idMaster
  const dominioMaster = 'produto'
  const [nomeMaster, setNomeMaster] = useState("")
  const [idUnidadeMedidaMaster, setIdUnidadeMedidaMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      if (!resp.data || !resp.data[0]) return
      setNomeMaster(resp.data[0].name)
      setIdUnidadeMedidaMaster(resp.data[0].idUnidadeMedida)
    })

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        Componentes da Ficha
        </div>
      {nomeMaster}
      </h4>

      <MyTabsForm
        dominio={dominio}
        idMaster={idMaster}
        filterList={filterList}

        columns={[    
          { label: "Alt", accessor: "numeroAlternativa", sortable: true },

          { label: "Estágio", accessor: "estagioName", sortable: true },
          { label: "Seq", accessor: "sequencia", sortable: true },
          { label: "Componente", accessor: "componenteName", sortable: true },
          { label: "Cons", accessor: "consumoProducao", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})} },
          { label: "Unid", accessor: "unidadeMedidaConsumoSigla", sortable: true },
          { label: "Produção", accessor: "quantidadeProducao", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})} },
          { label: "Unid", accessor: "unidadeMedidaProducaoSigla", sortable: true },
          
        ]}

        buttonsTop={[
          {label: "Voltar", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        buttonsAdd={[
          {label: "", nomeIcone: "fa-solid fa-rectangle-list", onClick: (params) => { navigate("/produto-componente-parte/"+ params.id); }}
        ]}        

        //add= {(params) => (<FormAdd dominio={dominio} idMaster={idMaster} callBusca={() => params.callBusca()} />) }
        add= {(params) => FormAdd({ id: params.id, dadosMaster: {id: idMaster, idUnidadeMedida: idUnidadeMedidaMaster}, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        edit={(params) => FormEdit({ id: params.id, dadosMaster: {id: idMaster, idUnidadeMedida: idUnidadeMedidaMaster}, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dadosMaster: {id: idMaster, idUnidadeMedida: idUnidadeMedidaMaster}, dominio:dominio, dataForm: params.dataForm, callBusca: () => params.callBusca() })} 

        />
    </>
  );
};
  
export default ProdutoComponente;