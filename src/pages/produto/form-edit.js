import React from 'react';
import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormEdit(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/produto`,
            body: {
                id: props.id,
                code: event.target.elements.code.value,
                name: event.target.elements.name.value,
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,
                unidadeMedidaCompraId: event.target.elements.unidadeMedidaCompraId.value,
                description: event.target.elements.description.value
            }
        }).then(() => {
            props.callBusca()
        })
  
    } 

    return (
        <LocalForm 
            salvar={(event) => {submit(event)}} 
            callBusca={() => props.callBusca()}
            dataForm={ props.dataForm } />
    )
}