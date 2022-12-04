import { makeAutoObservable } from "mobx";

import { $api } from "./api";

import { SectionListType } from "./headerState";

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
}

export default new RegisterState();
