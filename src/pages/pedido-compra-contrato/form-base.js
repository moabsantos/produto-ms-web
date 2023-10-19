import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import MyFormSubmit from '../../layout/MyFormSubmit';

import formataNumero from '../../_shared/formata-numero';
import formataData from '../../_shared/formata-data';

import MyTabsForm from '../../layout/MyTabsForm';
import FormView  from './form-view';
import LocalForm from './LocalForm';

const PedidoCompraContrato = () => {

  const navigate = useNavigate();

  const { idMaster } = useParams();

  const tituloForm = 'Pedido de Compra - Contrato'
  const dominio = 'pedido-compra-contrato'
  const bodyBase = {}

  const fieldsForm = [
    'fornecedorId', 'formaPagamentoId', 'numeroDocumento', 'dataDocumento',
    'qtdParcelas', 'valorMercadoria', 'valorServico', 'valorDesconto',
    'valorFrete', 'valorOutrosAcrescimos', 'valorOutrasDeducoes',
    'tipoDocumentoId']

  const filterList = ''

  return (
    <>
      <h4 className='p-3'>
        <div className='lead'>
        {tituloForm}
        </div>
      </h4>

      <MyTabsForm
        dominio={dominio}
        filterList={filterList}
        idMaster={idMaster}

        buttonsTop={[
          {label: "", labelPopover: "Sair desta tela", nomeIcone: "fa-solid fa-door-open", onClick: () => { navigate("/"); }}
        ]}

        columns={[    
          { label: "Fornecedor", accessor: "fornecedorName", sortable: false, alignCell:"right" },
          { label: "Form Pagto", accessor: "formaPagamentoName", sortable: false },
          { label: "Tipo Doc", accessor: "tipoDocumentoSigla", sortable: true, alignCell:"right" },
          { label: "No. Doc", accessor: "numeroDocumento", sortable: true, alignCell:"right" },
          { label: "Dt Doc", accessor: "dataDocumento", sortable: true, formataDado: (d) => {return formataData({data: d, format: 'to-br-date'})} },
          
          { label: "Mercadoria R$", accessor: "valorMercadoria", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Serviço R$", accessor: "valorServico", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Desconto R$", accessor: "valorDesconto", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Frete R$", accessor: "valorFrete", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Acrescimos R$", accessor: "valorOutrosAcrescimos", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Deduções R$", accessor: "valorOutrasDeducoes", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          { label: "Total R$", accessor: "valorTotal", sortable: true, alignCell:"right", formataDado: (n) => {return formataNumero({valor: n, format: 'c0,2'})} },
          
          { label: "Status", accessor: "statusItem", sortable: false },
        ]}

        add={(params) => MyFormSubmit({ 

          dominio: dominio, 
          bodyBase: {}, 
          fieldsForm:fieldsForm, 

          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.dataDocumento = formataData({data: payload.dataDocumento, format: 'api-date'})
            payload.valorMercadoria = formataNumero({valor:payload.valorMercadoria, format: 'c0.'})
            payload.valorServico = formataNumero({valor:payload.valorServico, format: 'c0.'})
            payload.valorDesconto = formataNumero({valor:payload.valorDesconto, format: 'c0.'})
            payload.valorFrete = formataNumero({valor:payload.valorFrete, format: 'c0.'})
            payload.valorOutrosAcrescimos = formataNumero({valor:payload.valorOutrosAcrescimos, format: 'c0.'})
            payload.valorOutrasDeducoes = formataNumero({valor:payload.valorOutrasDeducoes, format: 'c0.'})
            return payload
          },

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } 
            />
          )

        })}
        
        edit={(params) => MyFormSubmit({ 
          dominio: dominio, 

          bodyBase: {id: params.id}, 

          fieldsForm:fieldsForm, 

          callBusca: () => params.callBusca(),

          bodyFormated: (payload) => {
            payload.dataDocumento = formataData({data: payload.dataDocumento, format: 'api-date'})
            payload.valorMercadoria = formataNumero({valor:payload.valorMercadoria, format: 'c0.'})
            payload.valorServico = formataNumero({valor:payload.valorServico, format: 'c0.'})
            payload.valorDesconto = formataNumero({valor:payload.valorDesconto, format: 'c0.'})
            payload.valorFrete = formataNumero({valor:payload.valorFrete, format: 'c0.'})
            payload.valorOutrosAcrescimos = formataNumero({valor:payload.valorOutrosAcrescimos, format: 'c0.'})
            payload.valorOutrasDeducoes = formataNumero({valor:payload.valorOutrasDeducoes, format: 'c0.'})

            return payload
          },

          getForm: (par) => (
            <LocalForm 
                fieldsForm={ fieldsForm }
                salvar={ (event) => { par.onSubmit(event) } } 
                callBusca={ () => params.callBusca() }
                dataForm={ params.dataForm } 
            />
          )

        })}

        view={(params) => FormView({ id: params.id, dataForm: params.dataForm, bodyBase:bodyBase, fieldsForm:fieldsForm, callBusca: params.callBusca })} 
      
        buttonsAdd={[]}        

      />
    </>
  );
};
  
export default PedidoCompraContrato;