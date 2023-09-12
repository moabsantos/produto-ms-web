import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MySelectLabel from '../../layout/MySelectLabel';
import MyEditForm from '../../layout/MyEditForm';

const valores = {

}

const FormFilter = (props) => {

    function handlerFilter(event){

        event.preventDefault();
    
        const elements = event.target.elements
    
        let strFilter = ''

        if (elements.produtoGrupoId.value > 0) strFilter = strFilter + 'filter[]=produtoGrupoId||eq||'+elements.produtoGrupoId.value+'&'
        if (elements.fmNomeProduto.value !== '') strFilter = strFilter + 'filter[]=name||$cont||'+elements.fmNomeProduto.value+'&'

        props.dataFilter( strFilter )
    
    }


    return (        
        <div className="container">
            <Form onSubmit={ handlerFilter.bind(this) }>
            
            <MySelectLabel
                dominio="produto-grupo"
                caption="Grupo Produto"
                fieldName="produtoGrupoId"
                name="produtoGrupo"
                valueDefault={valores.produtoGrupoId} 
            />

            <MyEditForm caption="Parte do Nome" name="fmNomeProduto" fieldName="name" valor={valores.name} />

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