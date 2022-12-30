import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignat } from 'src/app/interfaces/enseignat';
import { Seance } from 'src/app/interfaces/seance';
import { EnseignantServiceService } from 'src/app/services/enseignant-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';

@Component({
  selector: 'app-ajout-enseignant',
  templateUrl: './ajout-enseignant.component.html',
  styleUrls: ['./ajout-enseignant.component.css']
})
export class AjoutEnseignantComponent implements OnInit {

  public frmEn : Enseignat={};
  public listEn : Enseignat[]=[]
  public listS :Seance[]=[]
    etudiants: any;
    constructor(private route:Router,private enseignantService:EnseignantServiceService, private seanceS:SeanceServiceService) { }
  
    ngOnInit(): void {
      this.getallSeance()
    }
  
  getallSeance(){
    this.seanceS.getAll().subscribe(res=>{
      this.listS=res
    },
    error=>{error})
  }
  
    addEnseignant(){
   
      this.enseignantService.addEnseignant(this.frmEn).subscribe(res=>{
        console.log(res)
        this.route.navigate(['afficheEnseignant'])
    },
      
    error=>{
      console.log(error)
    }
      )
    }

}
