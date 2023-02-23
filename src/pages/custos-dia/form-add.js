import React from 'react';

import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';
import formataData from '../../_shared/formata-data';

export default function FormAdd(props){
    
    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                empresaId: event.target.elements.empresaId.value,
                data: formataData({data: event.target.elements.data.value, format: 'api-date'}),
                setorId: event.target.elements.setorId.value,
                itemDespesaId: event.target.elements.itemDespesaId.value,
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,
                quantidadeRealizada: event.target.elements.quantidadeRealizada.value
            }
        })
    }   

    return (
        <LocalForm salvar={(event) => {submit(event)}} callBusca={() => props.callBusca()} />
    )
}