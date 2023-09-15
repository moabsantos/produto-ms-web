import getApi from '../_shared/req-get-http';
import postApi from '../_shared/req-post-http';
import delApi from '../_shared/req-del-http';
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

      // let images = await getApi({url: `https://images.queavanca.com/index.php?dominioName=${dominio}&dominioId=${idSelecao}`});
      // var filtrado = images.filter(function(obj) { return obj.deleted_at === null; });
      // return filtrado;

    }

    async delete(img){
      //delApi({url: `${process.env.REACT_APP_HOST_API}/${dominio}/${params.id}`, 
      //body: {requisicaoAlmoxarifadoId: idMaster}}) 


      let body = { dominioName: img.dominioName, dominioId: img.dominioId, imagemId: img.id};    
      console.log("body do service");
      console.log(JSON.stringify(body));

      //delApi({url: "https://images.queavanca.com", body: {body}});

      delApi({url: "https://images.queavanca.com", body: {
        dominioName: img.dominioName,
        dominioId: img.dominioId,
        imagemId: img.id
      }});

      console.log("deletou..");

      // return http.delete("", JSON.stringify(body), {
      //   headers: {
      //     "Content-Type": "application/json",
      //   }
      // });
    }

    async definirImagemCapa(img) {
      let formData = new FormData();

      console.log("img do service");
      console.log(img);
  
      formData.append("dominioName", img.dominioName);
      formData.append("dominioId", img.dominioId);
      formData.append("imagemIdCapa", img.id);

      return http.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
    }

  }

  export default new FileUploadService();
