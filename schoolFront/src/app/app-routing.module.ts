import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuils/acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { AfficheCoursComponent } from './cours/affiche-cours/affiche-cours.component';
import { AjoutCoursComponent } from './cours/ajout-cours/ajout-cours.component';
import { AfficheDepartementComponent } from './departements/affiche-departement/affiche-departement.component';
import { AjoutDepartementComponent } from './departements/ajout-departement/ajout-departement.component';
import { AfficheEnseignantComponent } from './enseignants/affiche-enseignant/affiche-enseignant.component';
import { AjoutEnseignantComponent } from './enseignants/ajout-enseignant/ajout-enseignant.component';
import { AfficheEtudiantComponent } from './etudiants/affiche-etudiant/affiche-etudiant.component';
import { AjoutEtudiantComponent } from './etudiants/ajout-etudiant/ajout-etudiant.component';
import { AfficheGroupeComponent } from './groupe/affiche-groupe/affiche-groupe.component';
import { AjoutGroupeComponent } from './groupe/ajout-groupe/ajout-groupe.component';
import { AfficheSalleComponent } from './salles/affiche-salle/affiche-salle.component';
import { AjoutSalleComponent } from './salles/ajout-salle/ajout-salle.component';
import { AfficheSeanceComponent } from './seances/affiche-seance/affiche-seance.component';
import { AjoutSeanceComponent } from './seances/ajout-seance/ajout-seance.component';
import { AfficheUniversiteComponent } from './universites/affiche-universite/affiche-universite.component';
import { AjoutUniversiteComponent } from './universites/ajout-universite/ajout-universite.component';


const routes: Routes = [
  {path:'accueil',component:AcceuilComponent},
  {path:'contact',component:ContactComponent},
  {path:'affiche',component:AfficheGroupeComponent},
  {path:'ajouter', component:AjoutGroupeComponent},
  {path:'afficheEtudiant',component:AfficheEtudiantComponent},
  {path:'ajouterEtudiant', component:AjoutEtudiantComponent},
  {path:'afficheSalle',component:AfficheSalleComponent},
  {path:'ajouterSalle', component:AjoutSalleComponent},
  {path:'afficheSeance',component:AfficheSeanceComponent},
  {path:'ajouterSeance', component:AjoutSeanceComponent},
  {path:'afficheCours',component:AfficheCoursComponent},
  {path:'ajouterCours', component:AjoutCoursComponent},
  {path:'afficheEnseignant',component:AfficheEnseignantComponent},
  {path:'ajouterEnseignant', component:AjoutEnseignantComponent},
  {path:'afficheDepartement',component:AfficheDepartementComponent},
  {path:'ajouterDepartement', component:AjoutDepartementComponent},
  {path:'afficheUniversite',component:AfficheUniversiteComponent},
  {path:'ajouterUniversite', component:AjoutUniversiteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
