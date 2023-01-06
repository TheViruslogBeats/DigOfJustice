import axios from "axios";
import env from "dotenv"


export const SERVER_URL: string | undefined = process.env.API_URL;
// export const SERVER_URL: string = "https://apiconf.mirea.ru/";

export const $api = axios.create({
  baseURL: SERVER_URL,
});
