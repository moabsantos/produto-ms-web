import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import getApi from '../_shared/req-get-http';

const MySelect = (props) => {

    let [options, setOptions] = useState(null);
    const [valueDefault, setValueDefault] = useState(props.value);

    useEffect(() => {
      getApi({ url: `${process.env.REACT_APP_HOST_API}/${props.dominio}` }).then((data) => {

        const items = data.map(item => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))

        setOptions((<>{items}</>))
      })
    }, [props.dominio])

    const mySelect = <select 
          className="form-select"
          name={props.fieldName} 
          id={props.name} 
          onChange={(e) => setValueDefault(e.target.value)}
          value={valueDefault} >

          {options && (options)}
        </select>
    
    return props.caption ? (<Form.Group as={Row} className="mb-3" controlId={props.name}>
      <Form.Label column sm={2}>
      {props.caption}
      </Form.Label>
      <Col sm={10}>
      {options && (mySelect)}
      </Col>
    </Form.Group>) 
    : options && (mySelect)

  };

  export default MySelect;