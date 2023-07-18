import axios from "axios";
import { NPM_API_URL } from "./constants";
let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = NPM_API_URL;

axiosInstance.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const authToken = null;

axiosInstance.interceptors.request.use(
  async (config) => {
    console.log(
      `Request: ${config?.method} - ${config?.baseURL}${config?.url}`
    );
    console.log(
      `API Params: ${config.params ? config.params : "Not Available"}`
    );
    return config;
  },
  (error) => {
    console.log("error occured while requesting the API", error);
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(
      "response in axios interceptors",
      JSON.stringify(response, null, 2)
    );
    return response;
  },
  (error) => {
    console.log("error while getting response", error);
    const errorCode = error.response.status;
    console.log("errorCode", errorCode);
    throw error;
  }
);

export default axiosInstance;
