import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import MySelect from './MySelect';

const MySelectLabel = (props) => {
    
  const sizeLabel = props.sizeLabel ? props.sizeLabel : 2
  const sizeEdit = props.sizeEdit ? props.sizeEdit : 10

    return(<Form.Group as={Row} className="mb-3" controlId={'fmSel' + props.name}>
            <Form.Label column sm={sizeLabel}>
            {props.caption}
            </Form.Label>
            <Col sm={sizeEdit}>
              <MySelect 
                dominio={props.dominio}
                options={props.options}
                fieldName={props.fieldName}
                name={'fmSel' + props.name}
                valueDefault={props.valueDefault}
                valorVazio={props.valorVazio}
                onChange={props.onChange}
              />
            </Col>
          </Form.Group>)
  };

  export default MySelectLabel;