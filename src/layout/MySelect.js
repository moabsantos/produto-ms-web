import React, { useEffect, useState } from 'react';
import getApi from '../_shared/req-get-http';

const MySelect = (props) => {

    let [options, setOptions] = useState();
    const [valueDefault, setValueDefault] = useState(props.value);

    useEffect(() => {
      getApi({ url: `${process.env.REACT_APP_HOST_API}/${props.dominio}` }).then((resp) => {
        setOptions(resp.data)
      })
    }, [props.dominio])

    
    return (<select 
              className="form-select"
              name={props.fieldName} 
              id={props.name} 
              onChange={(e) => setValueDefault(e.target.value)}
              value={valueDefault} >
              {options && options.map(item => (<option value={item.id} key={item.id}>{item.name}</option>))}
          </select>)
  };

  export default MySelect;