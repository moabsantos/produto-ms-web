import React from 'react';

import MyTabsForm from '../../layout/MyTabsForm';
import formataData from '../../_shared/formata-data';

import FormAdd from './form-add';
import FormEdit from './form-edit';
import FormFilter from './form-filter';
import FormView from './form-view';
  
const CustosDia = () => {

  const dominio = 'custos-dia'

  const filterTable = 'filter[]=data||eq||'+ formataData({format:'date'})

  return (
    <>
      <h4 className='p-3'>
        Custos Dia
      </h4>
      <MyTabsForm
        dominio={dominio}
        defaultFilter={filterTable}

        columns={[    
          { label: "Data", accessor: "data", sortable: false },
          { label: "Produto / Serviço", accessor: "itemDespesaName", sortable: true },
          { label: "Setor", accessor: "setorName", sortable: true },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: true },
          { label: "Quantidade", accessor: "quantidadeRealizada", sortable: true, alignCell:"right" },
          { label: "Valor", accessor: "valorRealizado", sortable: true, alignCell:"right" }
        ]}
        
        filter= {(params) => FormFilter({dataFilter: params.dataFilter}) }
        add= {(params) => (<FormAdd dominio={dominio} callBusca={() => params.callBusca()} />) }
        edit={(params) => FormEdit({ id: params.id, dominio:dominio,  dataForm: params.dataForm, callBusca: () => params.callBusca() })}
        view={(params) => FormView({ id: params.id, dominio:dominio, dataForm: params.dataForm, callBusca: params.callBusca })} />
    </>
  );
};
  
export default CustosDia;