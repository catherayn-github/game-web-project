
export interface Platform {
    id : number
    name : string
    slug : string
}

export interface PlatformResponse {
    count : number
    results : Platform[]
}