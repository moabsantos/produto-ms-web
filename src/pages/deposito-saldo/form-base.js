import React from 'react';

import FormFilter from './form-filter';
import formataNumero from '../../_shared/formata-numero';
import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import getApi from '../../_shared/req-get-http';
  
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
        afterGetLista={(respApi, atributo, callBack) => {

          let dataLista = []
          if (respApi && respApi.data && respApi.data.length && respApi.data.length > 0) dataLista = respApi.data

          for (let index = 0; index < dataLista.length; index++) {
            const element = dataLista[index];

            dataLista[index]['estoqueMinimo'] = 0
            getApi({url:`${process.env.REACT_APP_HOST_API}/deposito-item/?filter=depositoId||$eq||${element.depositoId}&filter=itemId||$eq||${element.itemId}`}).then(esqMinimo => {
              if (esqMinimo && esqMinimo.data && esqMinimo.data.length>0){
                dataLista[index]['estoqueMinimo'] = esqMinimo.data[0].quantidadeMinima
                callBack(atributo, dataLista)
              } 
            })
            
          }
        }}

        columns={[    
          { label: "Emp", accessor: "empresaSigla", sortable: false },
          { label: "Dep", accessor: "depositoName", sortable: false },
          { label: "Grupo", accessor: "itemGrupoName", sortable: true },
          { label: "C. Item", accessor: "itemCode", sortable: true },
          { label: "Item", accessor: "itemName", sortable: true },
          { label: "Unid", accessor: "unidadeMedidaSigla", sortable: false },

          { label: "Lote", accessor: "loteCodigo", sortable: false },
          { label: "Est Min", accessor: "estoqueMinimo", sortable: true, alignCell:"right"
              , formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,3'})}
              , funcStyle: (currStyle, data) => {
                if (!data.estoqueMinimo) return currStyle
                if (!data.quantidadeDisponivel) return currStyle
                if (Number(data.estoqueMinimo) <= Number(data.quantidadeRecebida) + Number(data.quantidadeDisponivel) - Number(data.quantidadeSeparada)) return currStyle
                return {
                  ...currStyle,
                  backgroundColor: '#FFC0CB'
                }
              }
          },

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