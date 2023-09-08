import React from 'react';

import FormFilter from './form-filter';
import formataNumero from '../../_shared/formata-numero';
import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
  
const DepositoSaldo = () => {

  const tituloForm = 'Saldo do Depósito'
  const dominio = 'deposito-saldo'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'empresaId', 'dataSolicitacao', 'depositoIdOrigem', 'depositoIdDestino']

  let filterTable = 'filter=depositoId||$eq||0'

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}
        nomeTabAtiva={'filtro'}
        defaultFilter={filterTable}
        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }

        columns={[    
          { label: "Emp", accessor: "empresaSigla", sortable: false },
          { label: "Dep", accessor: "depositoName", sortable: false },
          { label: "Grupo", accessor: "itemGrupoName", sortable: true },
          { label: "C. Item", accessor: "itemCode", sortable: true },
          { label: "Item", accessor: "itemName", sortable: true },
          { label: "Unid", accessor: "unidadeMedidaSigla", sortable: false },

          { label: "Lote", accessor: "loteCodigo", sortable: false },

          { label: "Recebido", accessor: "quantidadeRecebida", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})} },
          { label: "Disponível", accessor: "quantidadeDisponivel", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})} },
          { label: "Requisitado", accessor: "quantidadeRequisitada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})} },
          { label: "Separado", accessor: "quantidadeSeparada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})} },
          { label: "Ped", accessor: "quantidadePedida", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Fat", accessor: "quantidadeFaturada", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} }
        ]}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[]}        

      />
    </>
  );
};
  
export default DepositoSaldo;