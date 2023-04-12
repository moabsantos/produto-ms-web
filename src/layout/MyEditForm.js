import { Col, Form, Row } from "react-bootstrap";

const MyEditForm = (props) => {

    const sizeLabel = props.sizeLabel ? props.sizeLabel : 2
    const sizeEdit = props.sizeEdit ? props.sizeEdit : 10

    return (
        <Form.Group sm={sizeLabel + sizeEdit} as={Row} className="mb-3" controlId={props.name}>
            <Form.Label column sm={sizeLabel}>
            {props.caption}
            </Form.Label>
            <Col sm={sizeEdit}>
                <Form.Control type="text" onChange={props.onChange} placeholder={props.caption} name={props.fieldName} defaultValue={props.valor} />
            </Col>
        </Form.Group>
    )
}

export default MyEditForm