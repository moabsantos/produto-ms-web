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
                produtoId: props.dadosMaster.id,
                sequencia: event.target.elements.sequencia.value,

                quantidadeProducao: formataNumero({format: 'c0.', valor: event.target.elements.quantidadeProducao.value}),
                unidadeMedidaProducaoId: event.target.elements.unidadeMedidaProducaoId.value,

                componenteId: event.target.elements.componenteId.value,
                unidadeMedidaConsumoId: event.target.elements.unidadeMedidaConsumoId.value,
                consumoProducao: formataNumero({format: 'c0.', valor: event.target.elements.consumoProducao.value}),

                estagioId: event.target.elements.estagioId.value,
                numeroAlternativa: event.target.elements.numeroAlternativa.value
            }
        }).then(() => {
            props.callBusca()
        })
    }   

    return (
        <LocalForm 
            idMaster={props.dadosMaster.id} 
            salvar={(event) => {submit(event)}} 
            callBusca={() => props.callBusca()} 
        />
    )
}