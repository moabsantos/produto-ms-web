import { Col, Form, Row } from "react-bootstrap";

const MyEditForm = (props) => {

    return (
        <Form.Group as={Row} className="mb-3" controlId={props.name}>
            <Form.Label column sm={2}>
            {props.caption}
            </Form.Label>
            <Col sm={10}>
                <Form.Control type="text" placeholder={props.caption} name={props.fieldName} defaultValue={props.valor} />
            </Col>
        </Form.Group>
    )
}

export default MyEditForm