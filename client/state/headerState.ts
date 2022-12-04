import { AxiosResponse } from "axios";
import { makeAutoObservable } from "mobx";
import { SERVER_URL, $api } from "./api";

export interface SectionListType {
  id: number;
  title: string;
  date: string;
  time: string;
  place: string;
  showArrow: boolean;
  opened: boolean;
  hQuesions: boolean;
  canRegister: boolean;
  questions: string[];
  hReports: boolean;
  reports: SectionListReportType[];
}

export interface SectionListReportType {
  id: number;
  fullName: string;
  studyPlaceAndSpecialy: string;
  workPlaceAndPosition: string;
  formOfParticipation: string;
  topic: string;
}

export interface SectionButtonsType {
  id: number;
  text: string;
  sectionList: SectionListType[];
}

export interface programsType {
  id: number;
  title: string;
  where: string;
  date: string;
  time: string;
  info: boolean;
  infoOpened: boolean;
  inform: programInform[];
}

export interface programInform {
  id: number;
  img: string;
  fio: string;
  text: string;
}

export interface ProgramTypes {
  programs?: programsType[];
  sections?: SectionButtonsType[];
}

class HeaderState {
  program: ProgramTypes = {};

  currentButton: number = 1;
  currentList: SectionListType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  openList(id: number) {
    this.currentList = this.currentList.map((list) => {
      if (list.id === id) {
        list.opened = !list.opened;
      }
      return list;
    });
  }

  setCurrentButtonAndList(id: number, list: SectionListType[]) {
    this.currentButton = id;
    this.currentList = list.sort((a, b) => {
      return a.id - b.id;
    });
  }

  openProgram(id: number) {
    this.program.programs = this.program.programs?.map((prog) => {
      if (prog.id === id) {
        prog.infoOpened = !prog.infoOpened;
      }
      return prog;
    });
  }

  async getProgramm() {
    let response = await $api.get<ProgramTypes>("/api/program");
    console.log(response.data);
    this.program = response.data;
    if (response.data.sections) {
      this.currentButton = response.data.sections[0].id;
      this.currentList = response.data.sections[0].sectionList.sort((a, b) => {
        return a.id - b.id;
      });
    }
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
