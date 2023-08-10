import React from 'react';
import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';
import { toast } from 'react-toastify';

export default function FormAdd(props){

    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/produto`,
            body: {
                code: event.target.elements.code.value,
                name: event.target.elements.name.value,
                unidadeMedidaId: event.target.elements.unidadeMedidaId.value,
                unidadeMedidaCompraId: event.target.elements.unidadeMedidaCompraId.value,
                description: event.target.elements.description.value,
                produtoGrupoId: event.target.elements.produtoGrupoId.value
            }
        }).then((res) => {
            if (res && res.success ) for (const m of res.success.messages) toast.success(m);
            props.callBusca()
        })

    }    

    return (
        <LocalForm 
            salvar={(event) => {submit(event)}} 
            callBusca={() => props.callBusca()} />
    )
}