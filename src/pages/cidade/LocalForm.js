import { Button, Col, Form, Row } from "react-bootstrap";
import MyEditForm from "../../layout/MyEditForm";
import MySelectLabel from "../../layout/MySelectLabel";

const LocalForm = (props) => {

    let valores = {
        code: '',
        name: '',
        sigla: '',
        description: '',
        ufId: 0
    }

    if (props.dataForm){

        valores = {
            code: props.dataForm.code,
            name: props.dataForm.name,
            sigla: props.dataForm.sigla,
            description: props.dataForm.description,
            ufId: props.dataForm.ufId
        }

    }

    return (
        <div className="container">
            <Form onSubmit={ props.salvar.bind( this ) }>

            <MyEditForm caption="Codigo" name="fmcode" fieldName="code" valor={valores.code} />
            <MyEditForm caption="Nome" name="fmnome" fieldName="name" valor={valores.name} />
            <MyEditForm caption="Sigla" name="fmSigla" fieldName="sigla" valor={valores.sigla} />
            <MyEditForm caption="Descrição" name="fmDescricao" fieldName="description" valor={valores.description} />

            <MySelectLabel
                dominio="uf"
                caption="UF"
                fieldName="ufId"
                name="uf"
                valueDefault={valores.ufId} 
            />

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