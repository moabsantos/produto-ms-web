import { Form, Button, Row, Col } from "react-bootstrap"
import MyEditForm from "../../layout/MyEditForm"
import SelectUnidadeMedida from "../unidade-medida/select"

const LocalForm = (props) => {

    let valores = {
        name: '',
        unidadeMedidaId: '',
        description: ''
    }

    if (props.dataForm){

        valores = {
            name: props.dataForm.name,
            unidadeMedidaId: props.dataForm.unidadeMedidaId,
            description: props.dataForm.description
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />

            <Form.Group as={Row} className="mb-3" controlId="fmUnidadeMedidaId" name="unidadeMedidaIdGroup">
                <Form.Label column sm={2}>
                    Unidade Medida
                </Form.Label>
                <Col sm={10}>
                
                <SelectUnidadeMedida fieldName="unidadeMedidaId" name="fmUnidadeMedida" value={valores.unidadeMedidaId}  />

                </Col>
            </Form.Group>

            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

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