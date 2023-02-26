import React from 'react';
import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormEdit(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                empresaId: event.target.elements.empresaId.value,
                ano: event.target.elements.ano.value,
                mes: event.target.elements.mes.value,
            }
        })
    }    

    return (
        <LocalForm 
            salvar={(event) => {submit(event)}} 
            callBusca={() => props.callBusca()} 
            dataForm={ props.dataForm } />
    )
}