import React from 'react';

import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormAdd(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                produtoId: props.idMaster,
                quantidadeProducao: event.target.elements.quantidadeProducao.value,
                unidadeMedidaProducaoId: event.target.elements.unidadeMedidaProducaoId.value,

                componenteId: event.target.elements.componenteId.value,
                unidadeMedidaConsumoId: event.target.elements.unidadeMedidaConsumoId.value,
                consumoProducao: event.target.elements.consumoProducao.value,

                estagioId: event.target.elements.estagioId.value,
                numeroAlternativa: event.target.elements.numeroAlternativa.value
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