import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';

import getApi from '../../_shared/req-get-http';
  
const PedidoVendaItem = () => {

  const navigate = useNavigate();
  const dominio = 'pedido-venda-item'
  const dominioMaster = 'pedido-venda'
  const [dadosMaster, setDadosMaster] = useState("")


  const { idMaster } = useParams();

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDadosMaster(resp.data[0].name)
    })

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        Itens do Pedido
        </div>
      {dadosMaster}
      </h4>

      <MyTabsForm
        dominio={dominio}
        idMaster={idMaster}

        columns={[    
          { label: "Produto", accessor: "itemVendaName", sortable: true },
          { label: "Quantidade", accessor: "quantidadeSolicitada", sortable: true },
          { label: "Valor Bruto", accessor: "valorInicialItem", sortable: true },
          { label: "Desconto (%)", accessor: "percentDescontoItem", sortable: true },
          { label: "Valor Líquido", accessor: "valorItem", sortable: true },
          { label: "Total", accessor: "valorTotalItem", sortable: true },
        ]}

        buttonsTop={[
          {label: "Voltar", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        add= {(params) => (<FormAdd dominio={dominio} idMaster={idMaster} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} 

        />
    </>
  );
};
  
export default PedidoVendaItem;