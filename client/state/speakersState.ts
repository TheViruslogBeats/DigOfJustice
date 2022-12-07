import { makeAutoObservable } from "mobx";
import { $api } from "./api";

interface SpeakerType {
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

  constructor() {
    makeAutoObservable(this);
  }

  pushSpeakers(data: SpeakerType[]) {
    this.speakers.push(...data);
  }

  async getOnceExperts() {
    if (this.a) {
      this.a = false
      let response = await $api.post<SpeakerType[]>("/api/speakers", {
        page: 1,
        size: 4,
      });
      this.pushSpeakers(response.data);
    }
  }

  async getExperts(page: number) {
    for (let i = 2; i < 5; i++) {
      let response = await $api.post<SpeakerType[]>("/api/speakers", {
        page: i,
        size: 4,
      });
      this.pushSpeakers(response.data);
    }
    this.page = 7
  }
}

export default new SpeakerState();
