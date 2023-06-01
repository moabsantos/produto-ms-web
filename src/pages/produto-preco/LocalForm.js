import { Form, Button, Row, Col } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

const LocalForm = (props) => {

    let valores = {}

    if (props.dataForm){

        props.fieldsForm.forEach(element => {
            if (props.dataForm[element]) valores[element] = props.dataForm[element]    
        });

        valores['dataMaximaPrecoCompra'] = formataData({data: props.dataForm.dataMaximaPrecoCompra, format: 'to-br-date'})
        valores['precoCompra'] = formataNumero({valor: props.dataForm.precoCompra, format: 'c0,3'})

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Ano" name="fmano" fieldName="ano" valor={valores.ano} />
            <MyEditForm caption="Mes" name="fmmes" fieldName="mes" valor={valores.mes} />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade de Compra"
                fieldName="unidadeMedidaCompraId"
                name="unidadeMedidaCompra"
                valueDefault={valores.unidadeMedidaCompraId} 
            />

            <MyEditForm caption="Valor" name="fmvalorcompra" fieldName="precoCompra" valor={valores.precoCompra} />
            <MyEditForm caption="Data Validade Preço" name="dataMaximaPrecoCompra" fieldName="dataMaximaPrecoCompra" valor={valores.dataMaximaPrecoCompra} />

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