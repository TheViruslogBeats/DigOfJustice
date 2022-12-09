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

  error: string = "";
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
    try {
      if (data.studyPlaceAndSpecialy === undefined) {
        data.studyPlaceAndSpecialy = "";
      } else if (data.workPlaceAndPosition === undefined) {
        data.workPlaceAndPosition = "";
      }
      let response = await $api.post("/api/report", { ...data });
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RegisterState();
