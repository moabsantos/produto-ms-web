import React, { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";

const LocalForm = (props) => {

    const [idCliente, setIdClient] = useState()

    let valores = {
        code: '',
        name: '',
        sigla: '',
        description: ''
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            sigla: props.dataForm.sigla,
            description: props.dataForm.description
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />

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
                fieldName="localEntregaId"
                name="localEntrega"
                valueDefault={valores.clienteEstabelecimentoId} 
            />   

            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <div className="d-inline p-2"><Button type="submit">Salvar</Button></div>
                    <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}>Voltar</Button></div>
                </Col>
            </Form.Group>

            </Form>
        </div> 
    )
}

export default LocalForm