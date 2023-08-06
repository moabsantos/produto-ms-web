import React, { useState }  from 'react';
import { useParams } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import getApi from '../../_shared/req-get-http';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const DepositoItem = () => {

  const { idMaster } = useParams();


  const [depositoMaster, setDepositoMaster] = useState("")
  const [empresaMaster, setEmpresaMaster] = useState("")

  getApi({ url: process.env.REACT_APP_HOST_API + '/deposito/' + idMaster })
    .then((resp) => {
      setDepositoMaster(resp.data[0].name)
      setEmpresaMaster(resp.data[0].empresaName)
    })


  const tituloForm = 'Depósito Item'
  const dominio = 'deposito-item'
  const bodyBase = {}
  const fieldsForm = ['description', 'itemId', 'unidadeMedidaId'
          , 'quantidadeMaxima', 'quantidadeMinima']

  return (
    <>
      <h4 className='p-3'>
        <u>{tituloForm}</u>
      </h4>
      <div className='p-3'>
        <table className="table table-bordered">
          <thead><tr><th>Depósito</th><th>Empresa</th></tr></thead>
          <tbody><tr><td>{depositoMaster}</td><td>{empresaMaster}</td></tr></tbody>
        </table>
      </div>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Cód. Item", accessor: "itemCode", sortable: true },
          { label: "Item", accessor: "itemName", sortable: true },
          { label: "Unidade", accessor: "unidadeMedidaSigla", sortable: true },
          { label: "Qtd. Mínima", accessor: "quantidadeMinima", sortable: true },
          { label: "Qtd. Máxima", accessor: "quantidadeMaxima", sortable: true },
        ]}

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {
            depositoId: idMaster
          }, 
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
          bodyBase: { 
            id: params.id,
            depositoId: idMaster 
          }, 
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
  
export default DepositoItem;