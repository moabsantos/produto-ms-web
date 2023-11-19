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
        if (elements.itemGrupoId.value !== '') strFilter = strFilter + 'filter[]=itemGrupoId||$eq||'+elements.itemGrupoId.value+'&'
        if (elements.itemId.value !== '') strFilter = strFilter + 'filter[]=itemId||$eq||'+elements.itemId.value+'&'

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
                dominio="produto-grupo"
                caption="Grupo de Produtos"
                fieldName="itemGrupoId"
                name="itemGrupoId"
                valueDefault={valores.itemGrupoId} 
            />

            <MySelectLabel
                dominio="produto"
                caption="Produtos"
                fieldName="itemId"
                name="itemId"
                valueDefault={valores.itemId} 
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