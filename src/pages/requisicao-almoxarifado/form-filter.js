import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MySelectLabel from '../../layout/MySelectLabel';

const FormFilter = (props) => {

    function handlerFilter(event){

        event.preventDefault();
    
        const elements = event.target.elements
    
        let strFilter = ''

        if (elements.statusItemNot.value !== ''){
            if (elements.statusItemNot.value !== 'naoEntregue') strFilter = strFilter + 'filter[]=statusItem||$eq||'+elements.statusItemNot.value
            if (elements.statusItemNot.value === 'naoEntregue') strFilter = strFilter + 'filter[]=statusItem||$ne||Pendente&filter[]=statusItem||$ne||Entregue'
        }

        if (strFilter !== '') strFilter = strFilter + '&'
        if (elements.clienteId.value !== '' && elements.clienteId.value !== '0') strFilter = strFilter + 'filter[]=clienteId||$eq||'+elements.clienteId.value

        props.dataFilter( strFilter )
    
    }


    return (        
        <div className="container">
            <Form onSubmit={ handlerFilter.bind(this) }>
            
            <MySelectLabel
                dominio=""
                options={[{id: "Pendente", name: "Pendente"}, {id: "Entregue", name: "Entregue"}, {id: "naoEntregue", name: "Não Entregue"}]}
                caption="Requisicao"
                fieldName="statusItemNot"
                name="statusItemNot"
                valueDefault="Entregue"
            />

            <MySelectLabel
                dominio="cliente"
                caption="Cliente"
                fieldName="clienteId"
                name="cliente"
                valueDefault="0"
            />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <div className="d-inline p-2"><Button type="submit">Buscar</Button></div>
                </Col>
            </Form.Group>

            </Form>
        </div> 
    )
}

export default FormFilter