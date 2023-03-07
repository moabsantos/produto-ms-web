import React from 'react';
import { useNavigate } from "react-router-dom";

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
          { label: "Código", accessor: "code", sortable: false },
          { label: "Cliente", accessor: "clienteName", sortable: true },
          { label: "Cidade", accessor: "cidadeName", sortable: true }
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