import React from 'react';
import MyFormSubmit from '../../layout/MyFormSubmit';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const PedidoStatus = () => {

  const idMaster = 0;

  const tituloForm = 'Status Pedido'
  const dominio = 'pedido-status'
  const bodyBase = {}
  const fieldsForm = [
      'code', 'name', 'description', 
      'flagPendente', 'flagEmProducao', 'flagEmTransito', 'flagEntregue', 
      'flagAprovado', 'flagFinalizado', 'cor']

  return (
    <>
      <h4 className='p-3'>
        {tituloForm}
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Código", accessor: "code", sortable: false },
          { label: "Nome", accessor: "name", sortable: true },
          { label: "Description", accessor: "description", sortable: true },
          { label: "Pendente", accessor: "flagPendente", sortable: true },
          { label: "Aprovado", accessor: "flagAprovado", sortable: true },
          { label: "Em Produção", accessor: "flagEmProducao", sortable: true },
          { label: "Em Trânsito", accessor: "flagEmTransito", sortable: true },
          { label: "Entregue", accessor: "flagEntregue", sortable: true },
          { label: "Finalizado", accessor: "flagFinalizado", sortable: true },
          { label: "Cor", accessor: "cor", sortable: true }
        ]}

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {}, 
          fieldsForm:fieldsForm,
          callBusca: () => params.callBusca(),

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                idMaster={ idMaster }
                callBusca={ () => par.callBusca() }
                dataForm={ params.dataForm } 
            />
          )
        })}
        
        edit={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: { id: params.id }, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } }  
                idMaster={ idMaster }
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } />
          )

        })}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[
        ]}        

      />
    </>
  );
};
  
export default PedidoStatus;