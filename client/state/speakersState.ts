import { makeAutoObservable, runInAction } from "mobx";
import { $api } from "./api";

export interface SpeakerType {
  id: number;
  img: string;
  alt: string;
  firstName: string;
  middleName: string;
  lastName: string;
  acDegree: string;
  acTitle: string;
  honorTitle: string;
  position: string;
  description: string;
}

class SpeakerState {
  a: boolean = true;
  page: number = 1;
  speakers: SpeakerType[] = [];

  all: SpeakerType[] = [];

  first: SpeakerType[] = [];
  second: SpeakerType[] = [];
  three: SpeakerType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  pushSpeakers(data: SpeakerType[]) {
    this.speakers.push(...data);
  }

  async getOnceExperts() {
    if (this.a) {
      this.a = false;
      let response = await $api.post<SpeakerType[]>("/api/speakers", {
        page: 1,
        size: 6,
      });
      runInAction(() => {
        this.all = response.data
        this.first = response.data.slice(0, 3);
        this.second = response.data.slice(3, 6);
      });
    }
  }

  async getExperts(page: number) {
    let arr: SpeakerType[] = [];
    for (let i = 1; i < 15; i++) {
      let response = await $api.post<SpeakerType[]>("/api/speakers", {
        page: i,
        size: 4,
      });
      arr.push(...response.data);
    }
    this.three = arr.sort((a,b) => a.id - b.id).slice(6, 100);
    this.all.push(...this.three);
    this.page = 7;
  }
}

export default new SpeakerState();
