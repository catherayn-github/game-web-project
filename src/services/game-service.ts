import  create from "./http-service";

export interface GamesResponse {
    count: number
    results : Game[]
}

export interface Game {
    id : number;
    name : string;
    background_image : string
    parent_platforms : {platform : Platform}[] //array of objects where each objects has a property called Platform of type Platform
}

export interface Platform{
    id : number 
    name : string
    slug : string
}




export default create("/games");