import React, { useEffect, useState } from 'react';
import getApi from '../_shared/req-get-http';

const MySelect = (props) => {

    let [options, setOptions] = useState([]);
    const [valueDefault, setValueDefault] = useState(props.valueDefault);

    useEffect(() => {

      if (props.dominio)
        getApi({ url: `${process.env.REACT_APP_HOST_API}/${props.dominio}` }).then((resp) => {
          if (resp){
            setOptions(resp.data)
          }
        })
      else
        if (props.options)
          setOptions(props.options)
    }, [props])

    return (<select 
              className="form-select"
              name={props.fieldName} 
              id={props.name} 
              onChange={(e) => {
                setValueDefault(e.target.value)
                if (props.onChange){
                  props.onChange(e.target.value)
                }
              }}
              value={valueDefault} >
              {options && options.length>0 && options[0].id !== 0 && (<option value="0" key="0" />)}
              {options && options.map(item => (<option value={item.id} key={item.id}>{item.name}</option>))}
          </select>)
  };

  export default MySelect;