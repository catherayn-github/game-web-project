import  Genre  from "./Genre";
import Platform  from "./Platform";
import Publisher from "./Publisher"


export default interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //array of objects where each objects has a property called Platform of type Platform
  metacritic: number;
  description_raw?: string;
  genres : Genre[]; 
  publishers : Publisher[];

}
