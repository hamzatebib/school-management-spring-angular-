import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/interfaces/cours';
import { Seance } from 'src/app/interfaces/seance';
import { CoursServiceService } from 'src/app/services/cours-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';

@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.css']
})
export class AjoutCoursComponent implements OnInit {
  public Cou : Cours={};
  public listC: Cours[]=[]
  public listS :Seance[]=[]
   
    constructor(private route:Router,private coursService:CoursServiceService, private seanceS:SeanceServiceService) { }
  
    ngOnInit(): void {
      this.getallSeance()
    }
  
  getallSeance(){
    this.seanceS.getAll().subscribe(res=>{
      this.listS=res
    },
    error=>{error})
  }
  
    addCours(){
   
      this.coursService.addCours(this.Cou).subscribe(res=>{
        console.log(res)
        this.route.navigate(['afficheCours'])
       
    },
  
    error=>{
      console.log(error)
    }
      )
    }

}
