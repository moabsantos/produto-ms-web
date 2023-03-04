import React from 'react';

import postApi from '../../_shared/req-post-http';
import LocalForm from './LocalForm';

export default function FormAdd(props){
    
    async function submit(event){

        event.preventDefault();
      
        postApi({
            url: `${process.env.REACT_APP_HOST_API}/${props.dominio}`,
            body: {
                code: event.target.elements.code.value,
                description: event.target.elements.description.value
            }
        }).then(() => {
            props.callBusca()
        })
    }   

    return (
        <LocalForm salvar={(event) => {submit(event)}} callBusca={() => props.callBusca()} />
    )
}