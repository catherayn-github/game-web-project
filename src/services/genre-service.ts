import  create from "./http-service";

export interface GenreResponse {
    count: number
    results : Genre[]
}

export interface Genre {
    id : number;
    name : string;
    image_background : string
  
}

export default create("/genres");