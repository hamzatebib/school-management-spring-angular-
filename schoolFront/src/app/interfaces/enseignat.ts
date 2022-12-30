import { Seance } from "./seance";

export interface Enseignat {
    matricule?:number,
    nom?:string,
    seance?: Seance 
}
