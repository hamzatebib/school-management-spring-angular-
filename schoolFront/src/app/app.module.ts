import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjoutEtudiantComponent } from './etudiants/ajout-etudiant/ajout-etudiant.component';
import { AfficheEtudiantComponent } from './etudiants/affiche-etudiant/affiche-etudiant.component';
import { ModifierEtudiantComponent } from './etudiants/modifier-etudiant/modifier-etudiant.component';
import { SupprimerEtudiantComponent } from './etudiants/supprimer-etudiant/supprimer-etudiant.component';
import { AfficheGroupeComponent } from './groupe/affiche-groupe/affiche-groupe.component';
import { AjoutGroupeComponent } from './groupe/ajout-groupe/ajout-groupe.component';
import { ModifGroupeComponent } from './groupe/modif-groupe/modif-groupe.component';
import { SupprimeGroupeComponent } from './groupe/supprime-groupe/supprime-groupe.component';
import { HttpClientModule } from '@angular/common/http';
import { Nav1Component } from './naving/nav1/nav1.component';
import { AfficheSalleComponent } from './salles/affiche-salle/affiche-salle.component';
import { AjoutSalleComponent } from './salles/ajout-salle/ajout-salle.component';
import { AfficheSeanceComponent } from './seances/affiche-seance/affiche-seance.component';
import { AjoutSeanceComponent } from './seances/ajout-seance/ajout-seance.component';
import { AjoutCoursComponent } from './cours/ajout-cours/ajout-cours.component';
import { AfficheCoursComponent } from './cours/affiche-cours/affiche-cours.component';
import { AfficheEnseignantComponent } from './enseignants/affiche-enseignant/affiche-enseignant.component';
import { AjoutEnseignantComponent } from './enseignants/ajout-enseignant/ajout-enseignant.component';
import { AfficheDepartementComponent } from './departements/affiche-departement/affiche-departement.component';
import { AjoutDepartementComponent } from './departements/ajout-departement/ajout-departement.component';
import { AfficheUniversiteComponent } from './universites/affiche-universite/affiche-universite.component';
import { AjoutUniversiteComponent } from './universites/ajout-universite/ajout-universite.component';
import { AcceuilComponent } from './acceuils/acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutEtudiantComponent,
    AfficheEtudiantComponent,
    ModifierEtudiantComponent,
    SupprimerEtudiantComponent,
    AfficheGroupeComponent,
    AjoutGroupeComponent,
    ModifGroupeComponent,
    SupprimeGroupeComponent,
    Nav1Component,
    AfficheSalleComponent,
    AjoutSalleComponent,
    AfficheSeanceComponent,
    AjoutSeanceComponent,
    AjoutCoursComponent,
    AfficheCoursComponent,
    AfficheEnseignantComponent,
    AjoutEnseignantComponent,
    AfficheDepartementComponent,
    AjoutDepartementComponent,
    AfficheUniversiteComponent,
    AjoutUniversiteComponent,
    AcceuilComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
