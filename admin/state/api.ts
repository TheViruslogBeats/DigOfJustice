import axios from "axios";

export const SERVER_URL = "https://api.virusbeats.ru";

export const $api = axios.create({
  baseURL: SERVER_URL,
});
