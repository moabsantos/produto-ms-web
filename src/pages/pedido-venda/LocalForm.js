import React, { useState } from "react"
import { Form } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import MyButonsFormSubmit from "../../layout/MyButonsFormSubmit";

const LocalForm = (props) => {

    let valores = {
        code: formataData({format: 'new-code'}),
    }

    if (props.dataForm){
        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });
    }

    const [idCliente, setIdClient] = useState(valores.clienteId)

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />

            <MySelectLabel
                dominio="prioridade"
                caption="Prioridade"
                fieldName="prioridadeId"
                name="prioridade"
                valueDefault={valores.prioridadeId} 
            />  

            <MySelectLabel
                dominio="cliente"
                caption="Cliente"
                fieldName="clienteId"
                name="cliente"
                valueDefault={valores.clienteId}
                onChange={(id) => { setIdClient(id) }}
            />

            <MySelectLabel
                dominio={"cliente-estabelecimento/"+idCliente}
                caption="Local de Entrega"
                fieldName="clienteEstabelecimentoId"
                name="localEntrega"
                valueDefault={valores.clienteEstabelecimentoId} 
            />   

            <MySelectLabel
                dominio="pedido-status"
                caption="Status do Pedido"
                fieldName="pedidoStatusId"
                name="pedidoStatus"
                valueDefault={valores.pedidoStatusId} 
            />  

            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MyButonsFormSubmit callBusca={props.callBusca} />

            </Form>
        </div> 
    )
}

export default LocalForm