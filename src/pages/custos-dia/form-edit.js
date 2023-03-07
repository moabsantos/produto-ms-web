import React from 'react';
import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

export default function FormEdit(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                id: props.id,
                empresaId: event.target.elements.empresaId.value,
                data: formataData({data: event.target.elements.data.value, format: 'api-date'}),
                setorId: event.target.elements.setorId.value,
                itemDespesaId: event.target.elements.itemDespesaId.value,
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,
                quantidadeRealizada: formataNumero({format: 'c0.', valor: event.target.elements.quantidadeRealizada.value}),
                valorRealizado: formataNumero({format: 'c0.', valor: event.target.elements.valorRealizado.value})
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