import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import MySelect from './MySelect';

const MySelectLabel = (props) => {
    
    return(<Form.Group as={Row} className="mb-3" controlId={'fmSel' + props.name}>
            <Form.Label column sm={2}>
            {props.caption}
            </Form.Label>
            <Col sm={10}>
              <MySelect 
                dominio={props.dominio}
                options={props.options}
                fieldName={props.fieldName}
                name={'fmSel' + props.name}
                valueDefault={props.valueDefault} 
              />
            </Col>
          </Form.Group>)
  };

  export default MySelectLabel;