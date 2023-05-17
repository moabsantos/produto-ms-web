import { Form, Button, Row, Col } from "react-bootstrap"

import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';
import formataNumero from '../../_shared/formata-numero';

const LocalForm = (props) => {

    let valores = {
        data: formataData({format: 'new-date-user'}),
    }

    if (props.dataForm){

        valores = {
            empresaId: props.dataForm.empresaId,
            data: formataData({data: props.dataForm.data, format: 'to-br-date'}),
            setorId: props.dataForm.setorId,
            itemProducaoId: props.dataForm.itemProducaoId,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            quantidadeRealizada: formataNumero({valor: props.dataForm.quantidadeRealizada, format: 'c0,3'}),
            valorRealizado: formataNumero({valor: props.dataForm.valorRealizado, format: 'c0,3'})
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="empresa"
                caption="Empresa"
                fieldName="empresaId"
                name="empresa"
                valueDefault={valores.empresaId} 
            />

            <MyEditForm caption="Data" name="fmdata" fieldName="data" valor={valores.data} />

            <MySelectLabel
                dominio="setor"
                caption="Setor"
                fieldName="setorId"
                name="setor"
                valueDefault={valores.setorId} 
            />

            <MySelectLabel
                dominio="produto"
                caption="Material / Serviço"
                fieldName="itemProducaoId"
                name="fmitemProducaoId"
                valueDefault={valores.itemProducaoId} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MyEditForm caption="Quantidade" name="fmQuantidade" fieldName="quantidadeRealizada" valor={valores.quantidadeRealizada} />

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