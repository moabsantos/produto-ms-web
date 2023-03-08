import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';

import getApi from '../../_shared/req-get-http';
  
const ProdutoComponente = () => {

  const navigate = useNavigate();
  const { idMaster } = useParams();

  const dominio = 'produto-componente'
  const filterList = 'filter=produtoId||$eq||'+ idMaster
  const dominioMaster = 'produto'
  const [dadosMaster, setDadosMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDadosMaster(resp.data[0].name)
    })

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        Componentes da Ficha
        </div>
      {dadosMaster}
      </h4>

      <MyTabsForm
        dominio={dominio}
        idMaster={idMaster}
        filterList={filterList}

        columns={[    
          { label: "Alt", accessor: "numeroAlternativa", sortable: true },
          { label: "Seq", accessor: "sequencia", sortable: true },
          { label: "Componente", accessor: "componenteName", sortable: true },
          { label: "Cons", accessor: "consumoProducao", sortable: true },
          { label: "Unid", accessor: "unidadeMedidaConsumoSigla", sortable: true },
          { label: "Prod", accessor: "quantidadeProducao", sortable: true },
          { label: "Unid", accessor: "unidadeMedidaProducaoSigla", sortable: true },
          { label: "Estágio", accessor: "estagioName", sortable: true },
        ]}

        buttonsTop={[
          {label: "Voltar", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        add= {(params) => (<FormAdd dominio={dominio} idMaster={idMaster} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, idMaster: idMaster, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, idMaster: idMaster, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} 

        />
    </>
  );
};
  
export default ProdutoComponente;