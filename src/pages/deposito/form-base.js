import React from 'react';
import { useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const Deposito = () => {

  const navigate = useNavigate();

  const idMaster = 0;

  const tituloForm = 'Depósito'
  const dominio = 'deposito'
  const bodyBase = {}
  const fieldsForm = [
    'code', 'name', 'description', 
    'flagPrincipal', 'flagBaixaEstoque', 'flagAjusteInventario', 
    'empresaId', 'setorId', 'sigla']

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
          { label: "Sigla", accessor: "sigla", sortable: true },
          { label: "Description", accessor: "description", sortable: true },
          { label: "Principal", accessor: "flagPrincipal", sortable: true },
          { label: "Empresa", accessor: "empresaName", sortable: true },
          { label: "Setor", accessor: "setorName", sortable: true },
          { label: "Baixa Estoque", accessor: "flagBaixaEstoque", sortable: true }
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
          {label: "", nomeIcone: "fa-solid fa-rectangle-list", onClick: (params) => { navigate("/deposito-item/"+ params.id); }},
        ]}       

      />
    </>
  );
};
  
export default Deposito;