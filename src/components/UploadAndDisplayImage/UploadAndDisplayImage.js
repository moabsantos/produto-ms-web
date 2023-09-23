import React, { useState, useEffect } from "react";
import ModalImage from "react-modal-image";
import UploadService from "../../service/file-upload";

const UploadAndDisplayImage = (props) => {

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [previewImages, setPreviewImages] = useState([]);
  const [progressInfos, setProgressInfos] = useState([]);
  const [message, setMessage] = useState([]);
  const [imageInfos, setImageInfos] = useState([]);

  const dominio = props.dominio;
  const idSelecao = props.idSelecao;

  useEffect(() => {
    UploadService.getFiles(idSelecao, dominio).then((response) => {
      setImageInfos(response.data);
  });
  }, [idSelecao, dominio]);

  

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

  }

  function upload(idx, file) {
    let _progressInfos = [progressInfos];

    UploadService.upload(file, dominio, idSelecao ,(event) => {
      _progressInfos[idx] = {percentage: Math.round((100 * event.loaded) / event.total)};
      setProgressInfos(_progressInfos);
    })
      .then(() => {
        setTimeout(

          function () {
            let nextMessage = ["Sucesso no upload da imagem: " + file.name];
            setMessage(nextMessage);
            setPreviewImages([]);
            setProgressInfos([]);
            return;
          },
            //.bind(this),
          1000
        );
        UploadService.getFiles(idSelecao, dominio).then((response) => {
          setImageInfos(response.data);
        });
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((e) => {
        _progressInfos[idx].percentage = 0;

        let nextMessage = ["Could not upload the image: " + file.name];
        return {
          progressInfos: _progressInfos,
          message: nextMessage
        };

      });
  }

  async function excluirImagem(img) {
    await UploadService.delete(img);
    UploadService.getFiles(idSelecao, dominio).then((response) => {
      setImageInfos(response.data);
    });
  }

  async function definirImagemCapa(img) {
    await UploadService.definirImagemCapa(img);
    UploadService.getFiles(idSelecao, dominio).then((response) => {
      setImageInfos(response.data);
    });
  }

  return (
    <div>

      <div className="row">
        <div className="col-12">
          <label className="btn btn-default p-0">
            <input type="file" multiple accept="image/*"
              onChange={(event) => {
                setSelectedFiles(event.target.files);
              }}
            />
          </label>
          <button
            style={{ float: 'right' }}
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
            return <img className="preview" src={img} alt={"image-" + i} key={i} />;
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

      <div className="col-12">

        {imageInfos &&
          imageInfos.filter(img => img.deleted_at === null).map((img, index) => (

            <div style={{
              position: 'relative',
              margin: '5px',
              float: 'left',
              width: '400px'
            }} key={img.id}>

              <ModalImage
                style={{
                  width: '100%',
                  height: '100%'
                }}
                small={'https://images.queavanca.com/index.php?filename=' + img.fileName}
                large={'https://images.queavanca.com/index.php?filename=' + img.fileName}
                alt={'Imagem ' + index}
              />

              <div style={{
                bottom: '0'
              }}>

                <button style={{ border: 'none' }}
                  className="bg-light text-dark"
                  onClick={() => excluirImagem(img)}>
                  <i className='fa fa-trash'></i>
                </button>

                <button style={{ border: 'none', padding: '10px' }}
                  className="bg-light text-dark"
                  onClick={() => definirImagemCapa(img)}>
                  <i className='fa fa-check-square'></i>
                </button>

                {img.flagCapa === true &&

                  <div className="d-inline p-1">
                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus">
                      <p>Imagem Capa</p>
                    </span>
                  </div>

                }

              </div>

            </div>
          ))}
      </div>

    </div>
  );
};

export default UploadAndDisplayImage;