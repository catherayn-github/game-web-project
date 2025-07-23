import axios from "axios";

//T means generic Type Parameter
export interface FetchResponse <T> {
    count: number;
    results: T[]; 
    
}

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        
        key : "bfa60c83d64945e6a98c9230cc825717"
    }
})