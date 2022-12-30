import { Enseignat } from "./enseignat";

export interface Departement {
    codeDep?:number,
    nomDep?:string,
    enseignant?: Enseignat 
}
