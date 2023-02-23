import React from 'react';
import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormAdd(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/produto`,
            body: {
                name: event.target.elements.name.value,
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,
                description: event.target.elements.description.value
            }
        })

    }    

    return (
        <LocalForm 
            salvar={(event) => {submit(event)}} 
            callBusca={() => props.callBusca()} />
    )
}