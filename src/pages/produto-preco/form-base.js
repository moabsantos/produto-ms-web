import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import MyFormSubmit from '../../layout/MyFormSubmit';
import getApi from '../../_shared/req-get-http';
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';
  
const ProdutoPreco = () => {

  const navigate = useNavigate();
  const { idMaster } = useParams();
  const dominioMaster = 'produto'

  getApi({ url: process.env.REACT_APP_HOST_API + '/'+ dominioMaster +'/' + idMaster })
    .then((resp) => {
      setNomeMaster(resp.data[0].name)
      setIdUnidadeMedidaMaster(resp.data[0].idUnidadeMedida)
    })

  const [nomeMaster, setNomeMaster] = useState("")
  const [idUnidadeMedidaMaster, setIdUnidadeMedidaMaster] = useState("")

  const tituloForm = 'Produto Preco'
  const dominio = 'produto-preco'
  const bodyBase = {}
  const fieldsForm = ['ano', 'mes', 'unidadeMedidaCompraId', 'precoCompra', 'dataMaximaPrecoCompra']

  return (
    <>
      <h4 className='p-3'>
        
        <div className='lead'>
        {tituloForm}
        </div>
        {nomeMaster}
      </h4>
      <MyTabsForm
        dominio={dominio}

        columns={[    
          { label: "Unidade Compra", accessor: "unidadeMedidaCompraSigla", sortable: false },
          { label: "Ano", accessor: "ano", sortable: false },
          { label: "Mês", accessor: "mes", sortable: false },
          { label: "Preco Compra", accessor: "precoCompra", sortable: true, alignCell:"right", formataDado: (valorFormatar) => {return formataNumero({valor: valorFormatar, format: 'c0,2'})} },
          { label: "Data Validade", accessor: "dataMaximaPrecoCompra", sortable: false, formataDado: (valorFormatar) => {return formataData({data: valorFormatar, format: 'to-br-date'})} }
        ]}

        add={(params) => MyFormSubmit({ 
          dominio: dominio, 
          bodyBase: {dadosMaster: {id: idMaster, name: nomeMaster, idUnidadeMedida: idUnidadeMedidaMaster}}, 
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
          bodyBase: { id: params.id, dadosMaster: {id: idMaster, name: nomeMaster, idUnidadeMedida: idUnidadeMedidaMaster} }, 
          fieldsForm:fieldsForm, 
          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.dataMaximaPrecoCompra = formataData({data: payload.dataMaximaPrecoCompra, format: 'api-date'})
            payload.precoCompra = formataNumero({format: 'c0.', valor:  payload.precoCompra})
            return payload
          },

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
      
        buttonsTop={[
          {label: "Voltar", onClick: () => { navigate("/" + dominioMaster); }}
        ]}     

      />
    </>
  );
};
  
export default ProdutoPreco;