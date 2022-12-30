import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/interfaces/salle';
import { Seance } from 'src/app/interfaces/seance';
import { SalleServiceService } from 'src/app/services/salle-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';

@Component({
  selector: 'app-ajout-seance',
  templateUrl: './ajout-seance.component.html',
  styleUrls: ['./ajout-seance.component.css']
})
export class AjoutSeanceComponent implements OnInit {
  public frmS : Seance={};
  public listS : Seance[]=[]
  public listSa :Salle[]=[]
    etudiants: any;
    constructor(private route:Router,private seanceService:SeanceServiceService, private salleS:SalleServiceService ){ }
  
    ngOnInit(): void {
      this.getallSalle()
    }
  
  getallSalle(){
    this.salleS.getAll().subscribe(res=>{
      this.listSa=res
    },
    error=>{error})
  }
  
    addSeance(){
   
      this.seanceService.addSeance(this.frmS).subscribe(res=>{
        console.log(res)
        this.route.navigate(['afficheSeance'])
    },
      
    error=>{
      console.log(error)
    }
      )
    }

}
