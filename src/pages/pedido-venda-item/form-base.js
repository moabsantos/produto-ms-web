import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

import getApi from '../../_shared/req-get-http';
  
const PedidoVendaItem = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();
  const dominio = 'pedido-venda-item'
  const filterList = 'filter=pedidoVendaId||$eq||'+ idMaster
  const dominioMaster = 'pedido-venda'
  const [dadosMaster, setDadosMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setDadosMaster(formataData({data:resp.data[0].created_at, format: 'to-br-date'}) +' - '+ resp.data[0].clienteName)
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
        filterList={filterList}
        idMaster={idMaster}

        columns={[    
          { label: "Produto", accessor: "itemVendaName", sortable: true },
          { label: "Quantidade", accessor: "quantidadeSolicitada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Valor Bruto", accessor: "valorInicialItem", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Desconto (%)", accessor: "percentDescontoItem", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Valor Líquido", accessor: "valorItem", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Total", accessor: "valorTotalItem", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
        ]}

        buttonsTop={[
          {label: "Voltar", onClick: () => { navigate("/" + dominioMaster); }}
        ]}

        add= {(params) => (<FormAdd dominio={dominio} idMaster={idMaster} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio, idMaster:idMaster, dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, idMaster:idMaster, dataForm: params.dataForm, callBusca: params.callBusca })} 

        />
    </>
  );
};
  
export default PedidoVendaItem;