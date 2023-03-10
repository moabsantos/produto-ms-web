import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MyEditForm from '../../layout/MyEditForm';

import MySelectLabel from '../../layout/MySelectLabel';
import formataData from '../../_shared/formata-data';

const valores = {

    data: formataData({format: 'new-date-user'})

}

const FormFilter = (props) => {

    function handlerFilter(event){

        event.preventDefault();
    
        const elements = event.target.elements
    
        let strFilter = ''
        
        if (elements.pedidoStatusflagFinalizado.value) strFilter = 'filter[]=pedidoStatusflagFinalizado||eq||'+ elements.pedidoStatusflagFinalizado.value

        if (elements.dataInicial.value) strFilter = 'filter[]=created_at||gte||'+ formataData({data: elements.dataInicial.value, format:'api-date'})
        
        props.dataFilter( strFilter )
    
    }


    return (        
        <div className="container">
            <Form onSubmit={ handlerFilter.bind(this) }>

            <MyEditForm caption="Data Inicial" name="fmdataInicial" fieldName="dataInicial" valor={valores.dataInicial} />

            <MySelectLabel
                dominio="pedido-status"
                caption="Status do Pedido"
                fieldName="pedidoStatusId"
                name="pedidoStatus"
                valueDefault={valores.pedidoStatusId} 
            />  
            
            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Não"}, {id: 1, name: "Sim"}]}
                caption="Finalizados"
                fieldName="pedidoStatusflagFinalizado"
                name="pedidoStatusflagFinalizado"
                valueDefault={valores.pedidoStatusflagFinalizado} 
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