import getApi from '../_shared/req-get-http';
import http from "./http-common";

class FileUploadService {

  upload(file, dominioName, dominioId, onUploadProgress) {
    let formData = new FormData();

    formData.append("name", file);
    formData.append("dominioName", dominioName);
    formData.append("dominioId", dominioId);

    return http.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  async getFiles(idSelecao, dominio) {
    return await getApi({ url: `https://images.queavanca.com/index.php?dominioName=${dominio}&dominioId=${idSelecao}` });
  }

  async delete(img) {
    let body = { dominioName: img.dominioName, dominioId: img.dominioId, imagemId: img.id };
    return await http.delete("", { data: body }, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

  async definirImagemCapa(img) {
    let formData = new FormData();
    formData.append("dominioName", img.dominioName);
    formData.append("dominioId", img.dominioId);
    formData.append("imagemIdCapa", img.id);
    return await http.post("", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  }

}

export default new FileUploadService();
