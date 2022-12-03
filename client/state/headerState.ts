import { makeAutoObservable } from "mobx";

const SERVER_URL = "https://api.virusbeats.ru"

class HeaderState {

  constructor() {
    makeAutoObservable(this)
  }

  async downloadReq() {
    try {
      const response = await fetch(`${SERVER_URL}/api/downloadFile`)
      if(response.status === 200){
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = "Требования по подготовке авторского оригинала к публикации в сборниках.docx"
        document.body.appendChild(link)
        link.click()
        link.remove()
      }
    } catch (error) {
      console.log(error);
      
    }
  }
}

export default new HeaderState();
