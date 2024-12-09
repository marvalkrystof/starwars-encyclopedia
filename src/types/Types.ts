
export interface IndividualBase {
  created: string; 
  edited: string; 
  url: string; 
}


export interface ApiResponse<T extends IndividualBase> {
  count: number;
  next: string | null; 
  previous: string | null; 
  results: T[]
}

export interface Person extends IndividualBase {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string; 
    films: string[];
    species: string[]; 
    vehicles: string[]; 
    starships: string[]; 

}

export interface Planet extends IndividualBase {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[]; 
 }

 export interface Films extends IndividualBase{
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];  
  planets: string[];     
  starships: string[];   
  vehicles: string[];    
  species: string[];              
}

export interface FetchDataComponent {
  fetchData: boolean;
}