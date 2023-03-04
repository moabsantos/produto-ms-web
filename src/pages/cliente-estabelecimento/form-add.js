import React from 'react';

import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormAdd(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                clientId: props.idMaster,
                code: event.target.elements.code.value,
                name: event.target.elements.name.value,
                description: event.target.elements.description.value,

                cnpj: event.target.elements.cnpj.value,
                inscricaoEstadual: event.target.elements.inscricaoEstadual.value,

                email: event.target.elements.email.value,
                telefone: event.target.elements.telefone.value,

                endereco: event.target.elements.endereco.value,
                numero: event.target.elements.numero.value,
                bairro: event.target.elements.bairro.value,
                cidadeId: event.target.elements.cidadeId.value
            }
        }).then(() => {
            props.callBusca()
        })
    }   

    return (
        <LocalForm idMaster={props.idMaster} salvar={(event) => {submit(event)}} callBusca={() => props.callBusca()} />
    )
}