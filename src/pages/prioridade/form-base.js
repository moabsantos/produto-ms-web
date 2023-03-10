import React from 'react';
import MyFormSubmit from '../../layout/MyFormSubmit';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const Prioridade = () => {

  const idMaster = 0;

  const tituloForm = 'Prioridade'
  const dominio = 'prioridade'
  const bodyBase = {}
  const fieldsForm = ['code', 'name', 'description', 'sequencia', 'cor']

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
          { label: "Sequencia", accessor: "sequencia", sortable: true },
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
  
export default Prioridade;