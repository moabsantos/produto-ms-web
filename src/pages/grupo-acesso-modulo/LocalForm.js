import { Form, Button, Row, Col } from "react-bootstrap"

import MySelectLabel from "../../layout/MySelectLabel";
import APP_CONST from "../../App.const"

const LocalForm = (props) => {



    if (props.dataForm){


    }

    return (
        <div className="container">

            <Form onSubmit={ props.salvar.bind( this ) }>

            <MySelectLabel
                dominio="modulo-sistema"
                caption="Módulo do Sistema"
                fieldName="moduloSistemaId"
                name="moduloSistemaId"
                valueDefault=""
            />

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