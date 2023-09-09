import getApi from '../_shared/req-get-http';

class FileUploadService {

    // upload(file, onUploadProgress) {
    //   let formData = new FormData();
  
    //   formData.append("name", file);
    //   formData.append("dominioName", "empresa");
    //   formData.append("dominioId", "3");
  
    //   return http.post("/", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     onUploadProgress,
    //   });
    // }
  
    async getFiles(idSelecao, dominio) {
      //return http.get("v1/file/files");
      return await getApi({url: `https://images.queavanca.com/index.php?dominioName=${dominio}&dominioId=${idSelecao}`});
    }

  }

  export default new FileUploadService();
