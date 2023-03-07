import React from 'react';

import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormAdd(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                pedidoVendaId: props.idMaster,

                itemVendaId: event.target.elements.itemVendaId.value,

                quantidadeSolicitada: event.target.elements.quantidadeSolicitada.value,
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,
                valorInicialItem: event.target.elements.valorInicialItem.value,
                percentDescontoItem: event.target.elements.percentDescontoItem.value,

            }
        }).then(() => {
            props.callBusca()
        })
    }   

    return (
        <LocalForm idMaster={props.idMaster} salvar={(event) => {submit(event)}} callBusca={() => props.callBusca()} />
    )
}