import { Seance } from "./seance";

export interface Cours {
    codeC?:number,
    libelle?:string,
    seance?: Seance
}
