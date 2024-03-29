import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MySelectLabel from '../../layout/MySelectLabel';

const FormFilter = (props) => {

    const valores = {

    }

    function handlerFilter(event){

        event.preventDefault();
    
        const elements = event.target.elements
    
        let strFilter = ''

        if (elements.depositoId.value !== '') strFilter = strFilter + 'filter[]=depositoId||$eq||'+elements.depositoId.value+'&'
        if (elements.status.value === 'aberto') strFilter = strFilter + 'filter[]=status||$ne||Finalizado&filter[]=status||$ne||Excluido&'
        if (elements.status.value === 'finalizado') strFilter = strFilter + 'filter[]=status||$eq||Finalizado&'

        props.dataFilter( strFilter )
    
    }


    return (        
        <div className="container">
            <Form onSubmit={ handlerFilter.bind(this) }>
            
            <MySelectLabel
                dominio="deposito"
                caption="Depósito"
                fieldName="depositoId"
                name="depositoId"
                valueDefault={valores.depositoId} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:"finalizado", name: "Finalizado"}, {id: "aberto", name: "Aberto"}]}
                caption="Status"
                fieldName="status"
                name="status"
                valueDefault={valores.status} 
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