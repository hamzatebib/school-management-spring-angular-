import { Departement } from "./departement";

export interface Universite {
    codeUnv?:number,
    nomUnv?:string,
    adresse?:string,
    departement?: Departement 
}
