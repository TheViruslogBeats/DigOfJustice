import { makeAutoObservable } from "mobx";
import { SERVER_URL, $api } from "./api";

class HeaderState {
  program = []
  
  constructor() {
    makeAutoObservable(this);
  }

  async getProgramm() {
    let response = $api.get("/api/program")
  }

  async downloadReq() {
    try {
      const response = await fetch(`${SERVER_URL}/api/downloadFile`);
      if (response.status === 200) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download =
          "Требования по подготовке авторского оригинала к публикации в сборниках.docx";
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new HeaderState();
