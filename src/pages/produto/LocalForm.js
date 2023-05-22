import { Form, Button, Row, Col } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import MySelectLabel from "../../layout/MySelectLabel";

const LocalForm = (props) => {

    let valores = {}

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            unidadeMedidaCompraId: props.dataForm.unidadeMedidaCompraId,
            description: props.dataForm.description,
            flagServico: props.dataForm.flagServico
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade Medida"
                fieldName="unidadeMedidaId"
                name="unidadeMedida"
                valueDefault={valores.unidadeMedidaId} 
            />

            <MySelectLabel
                dominio="unidade-medida"
                caption="Unidade de Compra"
                fieldName="unidadeMedidaCompraId"
                name="unidadeMedidaCompra"
                valueDefault={valores.unidadeMedidaCompraId} 
            />

            <MySelectLabel
                dominio=""
                options={[{id:0, name: "Produto"}, {id: 1, name: "Serviço"}]}
                caption="Tipo"
                fieldName="flagServico"
                name="flagServico"
                valueDefault={valores.flagServico} 
            />

            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MySelectLabel
                dominio="produto-grupo"
                caption="Grupo Produto"
                fieldName="produtoGrupoId"
                name="produtoGrupoId"
                valueDefault={valores.produtoGrupoId} 
            />

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