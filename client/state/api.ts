import axios from "axios";

// export const SERVER_URL: string = "https://api.virusbeats.ru";
export const SERVER_URL: string = "https://apiconf.mirea.ru/";

export const $api = axios.create({
  baseURL: SERVER_URL,
});
