import { Form, Button, Row, Col } from "react-bootstrap"

import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";
import formataNumero from '../../_shared/formata-numero';
import APP_CONST from "../../App.const"

const LocalForm = (props) => {

    let valores = {
        item: '',
        sequencia: 1,
        quantidadeSolicitada: 0
    }

    if (props.dataForm){

        valores = {
            empresaId: props.dataForm.empresaId,
            sequencia: props.dataForm.sequencia,
            setorId: props.dataForm.setorId,
            itemId: props.dataForm.itemId,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            description: props.dataForm.description,
            itemAgrupador: props.dataForm.itemAgrupador,
            quantidadeSolicitada: formataNumero({valor: props.dataForm.quantidadeSolicitada, format: 'c0,2'})
            
        }

    }

    return (
        <div className="container">

            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="setor"
                caption="Setor"
                fieldName="setorId"
                name="setor"
                valueDefault={valores.setorId} 
            />

            <MyEditForm caption="Seq" name="sequencia" fieldName="sequencia" valor={valores.sequencia} />

            <MySelectLabel
                dominio="produto"
                caption="Item"
                fieldName="itemId"
                name="item"
                valueDefault={valores.itemId} 
            />   

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Item Normal"}, {id: 1, name: "Item KIT"}]}
                caption="Tipo"
                fieldName="itemAgrupador"
                name="itemAgrupador"
                valueDefault={valores.itemAgrupador} 
            />

            <MyEditForm caption="Qtd. Solicitada" name="quantidadeSolicitada" fieldName="quantidadeSolicitada" valor={valores.quantidadeSolicitada} />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade de Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MyEditForm caption="Descrição" name="description" fieldName="description" valor={valores.description} />

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }} className='p-2'>
                    <div className="d-inline p-2"><Button type="submit"><i className="fa-regular fa-floppy-disk"></i></Button></div>
                    <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}><i className={APP_CONST.icone.voltar.i_classname}></i></Button></div>
                </Col>
            </Form.Group>
            </Form>
        </div>         
    )

}

export default LocalForm