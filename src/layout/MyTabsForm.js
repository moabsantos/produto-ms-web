import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import APP_CONST from "../App.const"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MyTable from './MyTable';
import getApi from '../_shared/req-get-http';
import ModalImage from "react-modal-image";
import UploadService from "../service/file-upload";

function MyTabsForm(props) {


  const navigate = useNavigate();

  const [strFilter, setStrFilter] = useState(props.defaultFilter);
  const [key, setKey] = useState(props.nomeTabAtiva ? props.nomeTabAtiva : 'busca');
  const [idSelecao, setIdSelecao] = useState(0);

  const [dataFmEdicao, setDataFmEdicao] = useState(<></>);

  const tableRef = useRef(null);


  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [previewImages, setPreviewImages] = useState([]);
  const [progressInfos, setProgressInfos] = useState([]);
  const [message, setMessage] = useState([]);
  const [imageInfos, setImageInfos] = useState([]);

  async function getDataForm(id){

    setDataFmEdicao(<></>)

    const resp = await getApi({ url: process.env.REACT_APP_HOST_API + '/'+ props.dominio + '/' + id })

    await UploadService.getFiles(id, props.dominio).then((response) => {
      console.log();
      console.log(response);
      setImageInfos(response.data);
    });

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

  function uploadImages() {
    const selectedFilesUpload = selectedFiles;

    let _progressInfos = [];

    for (let i = 0; i < selectedFilesUpload.length; i++) {
      _progressInfos.push({ percentage: 0, fileName: selectedFilesUpload[i].name });
    }

    setProgressInfos(_progressInfos);
    setMessage([]);

    for (let i = 0; i < selectedFilesUpload.length; i++) {
      upload(i, selectedFilesUpload[i]);
    }
    
    // this.setState(
    //   {
    //     progressInfos: _progressInfos,
    //     message: [],
    //   },
    //   () => {
    //     for (let i = 0; i < selectedFilesUpload.length; i++) {
    //       this.upload(i, selectedFilesUpload[i]);
    //     }
    //   }
    // );
  }

  function upload(idx, file) {
    let _progressInfos = [progressInfos];
    
    UploadService.upload(file, (event) => {
      _progressInfos[idx].percentage = Math.round((100 * event.loaded) / event.total);
      setProgressInfos(_progressInfos);
      // this.setState({
      //   progressInfos: _progressInfos,
      // });
    })
      .then(() => {
        setTimeout(
          
          function() {

              let nextMessage = ["Uploaded the image successfully: " + file.name];
              
                setMessage(nextMessage);
                setPreviewImages([]);
                setProgressInfos([]);

              return;
              

            // this.setState((prev) => {
            //   let nextMessage = [...prev.message, "Uploaded the image successfully: " + file.name];
            //   return {
            //     message: nextMessage,
            //     previewImages: [],
            //     progressInfos: []
            //   };
            // });
          }
          .bind(this),
          1000
      );

      //props.id
      UploadService.getFiles(3, props.dominio).then((response) => {
        console.log();
        console.log(response);
        setImageInfos(response.data);
      });

        // return UploadService.getFiles();
      })
      .then((files) => {

        setImageInfos(files.data);
        
        // this.setState({
        //   imageInfos: files.data,
        // });
      })
      .catch(() => {
        _progressInfos[idx].percentage = 0;

        //this.setState((prev) => {
          //let nextMessage = [...prev.message, "Could not upload the image: " + file.name];
          let nextMessage = ["Could not upload the image: " + file.name];
          return {
            progressInfos: _progressInfos,
            message: nextMessage
          };
        //});

        // this.setState((prev) => {
        //   let nextMessage = [...prev.message, "Could not upload the image: " + file.name];
        //   return {
        //     progressInfos: _progressInfos,
        //     message: nextMessage
        //   };
        // });

      });
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


        <div>

        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" multiple accept="image/*" 
              onChange={(event) => {
                console.log(event.target.files);
                setSelectedFiles(event.target.files);
              }}
              />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!selectedFiles}
              onClick={() => uploadImages()}
            >
              Upload
            </button>
          </div>
        </div>

        {progressInfos &&
          progressInfos.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}

        {previewImages && (
          <div>
            {previewImages.map((img, i) => {
              return <img className="preview" src={img} alt={"image-" + i}  key={i}/>;
            })}
          </div>
        )}

        {message.length > 0 && (
          <div className="alert alert-secondary mt-2" role="alert">
            <ul>
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}

          <div className="card mt-3">
            <div className="card-header">Imagens Salvas</div>
            

              {imageInfos &&
                imageInfos.map((img, index) => (
                  
                  <div style={{height : '300px', width : '300px'}} key={img.id}>
                  
                    <ModalImage
                      small={'https://images.queavanca.com/index.php?filename=' + img.fileName}
                      large={'https://images.queavanca.com/index.php?filename=' + img.fileName}
                      alt={'Imagem ' + index}
                    />

                  </div>

                ))}
            
          </div>

        </div>

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