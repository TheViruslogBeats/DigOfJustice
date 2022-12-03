import axios from "axios";

export const SERVER_URL: string = "https://api.virusbeats.ru";

export const $api = axios.create({
  baseURL: SERVER_URL,
});
