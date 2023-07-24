import axios from "axios";

export const api = axios.create({
    baseURL: "https://brightsup-dev.azurewebsites.net",
  })
  
  export const fetcher = (url: string) => api.get(url).then((res) => res.data);