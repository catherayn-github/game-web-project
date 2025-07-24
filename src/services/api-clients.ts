import axios, { AxiosRequestConfig } from "axios";

//T means generic Type Parameter
export interface FetchResponse<T> {
  count: number;
  next : string | null,
  results: T[];
  
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bfa60c83d64945e6a98c9230cc825717",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getData = (requestConfig ?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((response) => response.data);
  };
}

export default APIClient;
