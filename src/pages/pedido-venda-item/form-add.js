import React from 'react';

import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';
import formataNumero from '../../_shared/formata-numero';

export default function FormAdd(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                pedidoVendaId: props.idMaster,

                itemVendaId: event.target.elements.itemVendaId.value,

                quantidadeSolicitada: formataNumero({valor:event.target.elements.quantidadeSolicitada.value, format: 'c0.'}),
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,

                valorInicialItem: formataNumero({valor:event.target.elements.valorInicialItem.value, format: 'c0.'}),
                percentDescontoItem: formataNumero({valor:event.target.elements.percentDescontoItem.value, format: 'c0.'}),

            }
        }).then(() => {
            props.callBusca()
        })
    }   

    return (
        <LocalForm 
            idMaster={props.idMaster} 
            salvar={(event) => {submit(event)}} 
            callBusca={() => props.callBusca()} 
        />
    )
}