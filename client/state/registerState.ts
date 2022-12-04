import { makeAutoObservable } from "mobx";

import { $api } from "./api";

import { SectionListType } from "./headerState";

interface ReportType {
  fullName: string | undefined;
  email: string | undefined;
  activityType: number;
  studyPlaceAndSpecialy: string | undefined;
  workPlaceAndPosition: string | undefined;
  topic: string | undefined;
  section: string | undefined;
  fullNameSupervisor: string | undefined;
  rankSupervisor: string | undefined;
  positionSupervisor: string | undefined;
  formOfParticipation: number;
  acDegree: string | undefined;
}

class RegisterState {
  regList: SectionListType[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setRegList(data: SectionListType[]) {
    this.regList = data;
  }

  async getRegisterList() {
    let response = await $api.get<SectionListType[]>("/api/sections");
    this.setRegList(response.data);
  }

  async sendReport(data: ReportType) {
    if (data.studyPlaceAndSpecialy === undefined) {
      data.studyPlaceAndSpecialy = "";
    } else if (data.workPlaceAndPosition === undefined) {
      data.workPlaceAndPosition = "";
    }
    let response = await $api.post("/api/report", { ...data });
    console.log(response.data);
  }
}

export default new RegisterState();
