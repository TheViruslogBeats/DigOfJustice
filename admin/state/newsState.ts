import { makeAutoObservable } from "mobx";
import { $api } from "./api";

export interface NewsType {
  id: number;
  img: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

class NewsState {
  news: NewsType[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getNews() {
    let response = await $api.get<NewsType[]>("/admin/news");
    this.news = response.data;
    console.log(this.news);
    
  }
}

export default new NewsState();
