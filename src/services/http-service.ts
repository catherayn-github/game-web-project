import apiClient from "./api-clients";

interface Entity {
    id ?: number;
    count ?: number;
}

class HttpService <T> {
    endpoint : string;

    constructor(endpoint : string) {
        this.endpoint = endpoint;
    }

    get (){
        const controller = new AbortController();
        
        const request = apiClient.get<T>(this.endpoint, {
            signal : controller.signal
        });

        return {
            request,
            cancel : () => controller.abort()
        }
    }
}

const create = (endpoint : string) => new HttpService(endpoint);

export default create;