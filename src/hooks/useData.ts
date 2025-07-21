import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-clients";

//T means generic Type Parameter
interface FetchResponse <T> {
    count: number;
    results: T[]; 
    
}

function useData<T>(endpoint: string, requestConfig? : AxiosRequestConfig, dependencies?:any[]) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal : controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      })
  }, dependencies ? [...dependencies] : []);

  return { data, error, isLoading };

 
};

export default useData;
