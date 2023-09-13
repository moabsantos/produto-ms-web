import getApi from '../_shared/req-get-http';
import postApi from '../_shared/req-post-http';
import http from "../service/http-common-test";

class FileUploadService {


    //postApi({url: `${process.env.REACT_APP_HOST_API}/deposito-inventario-
    //item/delete/inventario/${params.id}`, body: {}}) 
    //  baseURL: "https://images.queavanca.com/index.php",

    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("name", file);
      formData.append("dominioName", "empresa");
      formData.append("dominioId", "3");

      return http.post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });

    //   return http.post({url : "https://images.queavanca.com/index.php/", body: formData }, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     onUploadProgress,
    //   });

    }
  
    async getFiles(idSelecao, dominio) {
      //return http.get("v1/file/files");
      return await getApi({url: `https://images.queavanca.com/index.php?dominioName=${dominio}&dominioId=${idSelecao}`});
    }

  }

  export default new FileUploadService();
