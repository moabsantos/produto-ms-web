import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import getApi from '../_shared/req-get-http';

const MySelect = (props) => {

    let [options, setOptions] = useState();
    const [valueDefault, setValueDefault] = useState(props.value);

    useEffect(() => {
      getApi({ url: `${process.env.REACT_APP_HOST_API}/${props.dominio}` }).then((data) => {
        setOptions(data)
      })
    }, [props.dominio])

    const mySelect = <select 
          className="form-select"
          name={props.fieldName} 
          id={props.name} 
          onChange={(e) => setValueDefault(e.target.value)}
          value={valueDefault} >
          {options && options.map(
            item => (
              <option value={item.id} key={item.id}>{item.name}</option>
            )
          )}
        </select>
    
    return options && props.caption ? (<Form.Group as={Row} className="mb-3" controlId={props.name}>
      <Form.Label column sm={2}>
      {props.caption}
      </Form.Label>
      <Col sm={10}>
      {(mySelect)}
      </Col>
    </Form.Group>) 
    : options && (mySelect)

  };

  export default MySelect;