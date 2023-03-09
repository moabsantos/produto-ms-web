import React from 'react';
import { useNavigate } from "react-router-dom";

import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

import MyTabsForm from '../../layout/MyTabsForm';
import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormView from './form-view';
  
const PedidoVenda = () => {

  const navigate = useNavigate();
  const dominio = 'pedido-venda'

  return (
    <>
      <h4 className='p-3'>
      Pedido Venda
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Data", accessor: "created_at", sortable: false, formataDado: (valorFormatar) => {return formataData({data: valorFormatar, format: 'to-br-date'})} },
          { label: "Cliente", accessor: "clienteName", sortable: true },
          { label: "Cidade", accessor: "cidadeName", sortable: true },
          { label: "Quantidade", accessor: "quantidadeItens", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Desconto", accessor: "valorDesconto", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Valor Total", accessor: "valorTotal", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} }
        ]}

        add= {(params) => (<FormAdd dominio={dominio} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[
          {label: "Itens", onClick: (params) => { navigate("/pedido-venda-item/"+ params.id); }}
        ]}
      
      />
    </>
  );
};
  
export default PedidoVenda;