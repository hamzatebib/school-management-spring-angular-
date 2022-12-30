import { Groupe } from "./groupe";

export interface Etudiant {
    matricule?:number,
    nom?:string,
    groupes?: Groupe 
}
