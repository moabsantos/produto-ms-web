import { Form, Button, Row, Col } from "react-bootstrap"

import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';

const LocalForm = (props) => {

    let valores = {
        code: '',
        name: '',
        dataSolicitacao: ''
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            empresaId: props.dataForm.empresaId,
            dataSolicitacao: formataData({data: props.dataForm.dataSolicitacao, format: 'to-br-date'})
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault={valores.empresaId} 
            />

            <MyEditForm caption="Data Solicitacao" name="dataSolicitacao" fieldName="dataSolicitacao" valor={valores.dataSolicitacao} />
            <MyEditForm caption="Data Entrega" name="dataEntrega" fieldName="dataEntrega" valor={valores.dataEntrega} />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }} className='p-2'>
                    <div className="d-inline p-2"><Button type="submit">Salvar</Button></div>
                    <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}>Voltar</Button></div>
                </Col>
            </Form.Group>
            </Form>
        </div>         
    )

}

export default LocalForm