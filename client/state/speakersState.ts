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
  page: number = 2;
  speakers: SpeakerType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  pushSpeakers(data: SpeakerType[]) {
    this.speakers.push(...data);
  }

  async getOnceExperts() {
    if (this.a) {
      this.a = false;
      this.getExperts(1);
    }
  }

  async getExperts(page: number) {
    let response = await $api.post<SpeakerType[]>("/api/speakers", {
      page,
      size: 3,
    });
    this.pushSpeakers(response.data);
    this.page++
  }
}

export default new SpeakerState();
