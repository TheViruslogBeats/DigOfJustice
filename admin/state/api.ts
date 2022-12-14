import axios from "axios";

export const SERVER_URL = "https://devapi.virusbeats.ru";

export const $api = axios.create({
  baseURL: SERVER_URL,
});
