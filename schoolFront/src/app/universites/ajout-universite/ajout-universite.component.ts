import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/interfaces/departement';
import { Universite } from 'src/app/interfaces/universite';
import { DepartementServiceService } from 'src/app/services/departement-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';

@Component({
  selector: 'app-ajout-universite',
  templateUrl: './ajout-universite.component.html',
  styleUrls: ['./ajout-universite.component.css']
})
export class AjoutUniversiteComponent implements OnInit {

  public frmU : Universite={};
  public listU : Universite[]=[]
  public listDep :Departement[]=[]
    etudiants: any;
    constructor(private route:Router,private universiteService:UniversiteServiceService , private departementS:DepartementServiceService ){ }
  
    ngOnInit(): void {
      this.getallDepartement()
    }
  
  getallDepartement(){
    this.departementS.getAll().subscribe(res=>{
      this.listDep=res
    },
    error=>{error})
  }
  
    addUniversite(){
   
      this.universiteService.addUniversite(this.frmU).subscribe(res=>{
        console.log(res)
        this.route.navigate(['afficheUniversite'])
    },
      
    error=>{
      console.log(error)
    }
      )
    }

}
