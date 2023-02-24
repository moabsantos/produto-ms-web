import { Button, Col, Form, Row } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";
import formataData from '../../_shared/formata-data';

const LocalForm = (props) => {

    let valores = {
        data: formataData({format: 'new-date-user'}),
        name: '',
        sigla: '',
        description: ''
    }

    if (props.dataForm){

        valores = {
            empresaId: props.dataForm.empresaId,
            data: props.dataForm.data,
            setorId: props.dataForm.setorId,
            itemDespesaId: props.dataForm.itemDespesaId,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            quantidadeRealizada: props.dataForm.quantidadeRealizada
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
                fieldName="itemDespesaId"
                name="fmitemDespesaId"
                valueDefault={valores.itemDespesaId} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MyEditForm caption="Quantidade" name="fmQuantidade" fieldName="quantidadeRealizada" valor={valores.quantidadeRealizada} />
            <MyEditForm caption="Valor" name="fmValor" fieldName="valorRealizado" valor={valores.valorRealizado} />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <div className="d-inline p-2"><Button type="submit">Salvar</Button></div>
                    <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}>Voltar</Button></div>
                </Col>
            </Form.Group>

            </Form>
        </div> 
    )
}

export default LocalForm