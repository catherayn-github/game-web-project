import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        
        key : "bfa60c83d64945e6a98c9230cc825717"
    }
})