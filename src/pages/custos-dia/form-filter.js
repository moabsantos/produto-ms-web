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
    
        let strFilter = 'filter[]=data||eq||'+ formataData({data: elements.data.value, format:'api-date'})

        if (elements.setorId.value > 0) strFilter = strFilter + '&filter[]=setorId||eq||'+elements.setorId.value

        props.dataFilter( strFilter )
    
    }


    return (        
        <div className="container">
            <Form onSubmit={ handlerFilter.bind(this) }>

            <MyEditForm caption="Data" name="fmdata" fieldName="data" valor={valores.data} />
            
            <MySelectLabel
                dominio="setor"
                caption="Setor"
                fieldName="setorId"
                name="setor"
                valueDefault={valores.setorId} 
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