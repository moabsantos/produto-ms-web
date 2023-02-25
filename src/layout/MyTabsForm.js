import React, { useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyTable from './MyTable';
import getApi from '../_shared/req-get-http';


function MyTabsForm(props) {
  const [key, setKey] = useState('busca');
  const [idSelecao, setIdSelecao] = useState(0);

  const [dataFmEdicao, setDataFmEdicao] = useState(<></>);

  const tableRef = useRef(null);

  async function getDataForm(id){

    setDataFmEdicao(<></>)

    const resp = await getApi({ url: process.env.REACT_APP_HOST_API + '/'+ props.dominio + '/' + id })

    return setDataFmEdicao(props.edit({
        id:id, dominio: props.dominio, dataForm:resp.data[0], callBusca: () => { setKey('busca') }
      }))
  }

  function getFilter(event){

    changeFilter(event)

    setKey('busca')
  }

  function changeFilter(data){
    tableRef.current.changeFilterTable(data)
  }

  const tabFiltro = props.filter ? <Tab eventKey="filtro" title="Filtro">
        {props.filter({ dataFilter: (data) => getFilter(data)  })}
    </Tab> : <></>

  const tabBusca =  <Tab eventKey="busca" title="Resultado">
      
      <MyTable 
          ref={tableRef}
          headers={props.headers}
          getItems={(data) => props.getItems(data)}
          dominio={props.dominio}

          defaultFilter={props.defaultFilter}
          changeFilterTable={changeFilter.bind(this)}

          btnInclusao={() => setKey('inclusao')}

          btnEdicao={(props) => {
                  setKey('edicao')
                  setIdSelecao(props.id)
                  getDataForm(props.id)
              }}

          btnVisualizacao={(props) => {
                  setKey('visualizacao')
                  setIdSelecao(props.id)
              }}

          urlLista="https://api.genderize.io/?name=luc"
          />
    </Tab>

  const tabInclusao = <Tab eventKey="inclusao" title="Inclusão">
          {props.add({ dominio: props.dominio,  callBusca: () => setKey('busca')  })}
      </Tab>

  const tabEdicao = <Tab eventKey="edicao" title="Edição">
          {dataFmEdicao}
      </Tab>

  const tabVisualizacao = <Tab eventKey="visualizacao" title="Vistualização">
          {props.view({id: idSelecao})}
      </Tab>

  return (
    <div className='p-3'>
  
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
      
      {key === 'busca' || key === 'filtro' ? tabFiltro : <></>}

      {key === 'busca' || key === 'filtro' ? tabBusca : <></>}

      {key === 'inclusao' ? tabInclusao : <></>}

      {key === 'edicao' ? tabEdicao : <></>}

      {key === 'visualizacao' ? tabVisualizacao : <></>}

      </Tabs>
    </div>
  );
}

export default MyTabsForm;