import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import APP_CONST from "../App.const"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyTable from './MyTable';
import getApi from '../_shared/req-get-http';


function MyTabsForm(props) {

  const navigate = useNavigate();

  const [strFilter, setStrFilter] = useState(props.defaultFilter);
  const [key, setKey] = useState(props.nomeTabAtiva ? props.nomeTabAtiva : 'busca');
  const [idSelecao, setIdSelecao] = useState(0);

  const [dataFmEdicao, setDataFmEdicao] = useState(<></>);

  const tableRef = useRef(null);

  async function getDataForm(id){

    setDataFmEdicao(<></>)

    const resp = await getApi({ url: process.env.REACT_APP_HOST_API + '/'+ props.dominio + '/' + id })

    return setDataFmEdicao(props.edit({
          id:id, 
          dominio: props.dominio, 
          idMaster: props.idMaster, 
          dadosMaster: props.dadosMaster,
          dataForm:resp.data ? resp.data[0]: {}, 
          callBusca: () => { setKey('busca') }
      }))
  }

  function getFilter(event){

    changeFilter(event)

    setKey('busca')
  }

  function changeFilter(data){
    setStrFilter(data)
    tableRef.current.changeFilterTable(data)
  }

  const tabFiltro = props.filter ? <Tab eventKey="filtro" title="Filtro">
        {props.filter({ dataFilter: (data) => getFilter(data)  })}
    </Tab> : <></>

  let butonsTopDefault = []
  if (props.add) butonsTopDefault.push({className: "btn btn-primary", label: "", labelPopover: "Incluir um novo", nomeIcone: "fa-regular fa-file", onClick: () => setKey('inclusao')})

  if (props.add && props.buttonsTop) butonsTopDefault.push({isSeparator: true})

  if (props.buttonsTop) butonsTopDefault = butonsTopDefault.concat(props.buttonsTop)

  if (!props.buttonsTop) butonsTopDefault.push({label: "", labelPopover: "Sair desta tela", nomeIcone: APP_CONST.icone.voltar.i_classname, onClick: () => { props.dominioMaster ? navigate("/"+ props.dominioMaster) : navigate("/home")  }})

  const tabBusca =  <Tab eventKey="busca" title="Lista dos Cadastrados">
      
      <MyTable
          ref={tableRef}
          headers={props.headers}
          columns={props.columns}

          getItems={(data) => props.getItems(data)}
          dominio={props.dominio}
          idMaster={props.idMaster}
          filterList={props.filterList}

          defaultFilter={strFilter}
          changeFilterTable={changeFilter.bind(this)}

          buttonsTop={butonsTopDefault}
          
          btnEdicao={props.edit && ((props) => {
                  setKey('edicao')
                  setIdSelecao(props.id)
                  getDataForm(props.id)
              })}

          btnVisualizacao={(props) => {
                  setKey('visualizacao')
                  setIdSelecao(props.id)
              }}

          buttonsAdd={props.buttonsAdd}
          />
    </Tab>
 
  const tabInclusao = <Tab eventKey="inclusao" title="Inclusão">
          {props.add && props.add({
            callBusca: () => setKey('busca')  
          })}
      </Tab>

  const tabEdicao = <Tab eventKey="edicao" title="Edição">
          {dataFmEdicao}
      </Tab>

  const tabImagens = <Tab eventKey="imagens" title="Imagens">
      {<>

        lista de imagens do id {idSelecao} do dominio {props.dominio} com id master {props.idMaster}
      
      </>}
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

      {key === 'edicao' || key === 'imagens' ? tabEdicao : <></>}

      {key === 'edicao' || key === 'imagens' ? tabImagens : <></>}

      {key === 'visualizacao' ? tabVisualizacao : <></>}

      </Tabs>
    </div>
  );
}

export default MyTabsForm;