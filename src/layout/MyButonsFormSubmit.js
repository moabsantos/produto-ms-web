import { Form, Button, Row, Col } from "react-bootstrap"
import APP_CONST from "../App.const"


const MyButonsFormSubmit = (props) => {

    return (
        <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }} className='p-2'>
                <div className="d-inline p-2"><Button type="submit"><i className={APP_CONST.icone.salvar.i_classname}></i></Button></div>
                <div className="d-inline p-2"><Button type="button" className='bg-light text-secondary' onClick={() => props.callBusca()}><i className={APP_CONST.icone.voltar.i_classname}></i></Button></div>
            </Col>
        </Form.Group>
    )


}

export default MyButonsFormSubmit
