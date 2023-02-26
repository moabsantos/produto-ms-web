import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import MyEditForm from '../../layout/MyEditForm';
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';

const valores = {

    data: formataData({format: 'new-date-json'})

}

const FormFilter = (props) => {

    function handlerFilter(event){

        event.preventDefault();
    
        const elements = event.target.elements
    
        props.dataFilter( 'filter[]=ano||eq||'+ elements.ano.value )
    
    }


    return (        
        <div className="container">
            <Form onSubmit={ handlerFilter.bind(this) }>

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault={valores.empresaId} 
            />
            
            <MyEditForm caption="Ano" name="fmAno" fieldName="ano" valor={valores.data.ano} />
            <MyEditForm caption="Mês" name="fmMes" fieldName="mes" valor={valores.data.mes} />
            
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