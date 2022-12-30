import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/interfaces/departement';
import { Enseignat } from 'src/app/interfaces/enseignat';
import { DepartementServiceService } from 'src/app/services/departement-service.service';
import { EnseignantServiceService } from 'src/app/services/enseignant-service.service';

@Component({
  selector: 'app-ajout-departement',
  templateUrl: './ajout-departement.component.html',
  styleUrls: ['./ajout-departement.component.css']
})
export class AjoutDepartementComponent implements OnInit {

  public Dep : Departement={};
  public listDep : Departement[]=[]
  public list :Enseignat[]=[]
    etudiants: any;
    constructor(private route:Router,private departementService:DepartementServiceService, private enseignantS:EnseignantServiceService) { }
  
    ngOnInit(): void {
      this.getallEnseignant()
    }
  
  getallEnseignant(){
    this.enseignantS.getAll().subscribe(res=>{
      this.list=res
    },
    error=>{error})
  }
  
    addDepartement(){
   
      this.departementService.addDepartement(this.Dep).subscribe(res=>{
        console.log(res)
        this.route.navigate(['afficheDepartement'])
    },
      
    error=>{
      console.log(error)
    }
      )
    }

}
