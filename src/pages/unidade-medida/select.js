import React, { useState } from 'react';
import getApi from '../../_shared/req-get-http';

const SelectUnidadeMedida = (props) => {

    let [options, setOptions] = useState(null);
    const [valueDefault, setValueDefault] = useState(props.value);

    if (!options)
      getApi({ url: `${process.env.REACT_APP_HOST_API}/unidade-medida` }).then((data) => {

        const items = data.map(item => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))

        setOptions(<>{items}</>)

      })

    return (
      <select 
        className="form-select"
        name={props.fieldName} 
        id={props.name} 
        onChange={(e) => setValueDefault(e.target.value)}
        value={valueDefault} >

        {options}

      </select>
    );
  };

  export default SelectUnidadeMedida;