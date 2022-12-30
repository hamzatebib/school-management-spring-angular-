import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/interfaces/salle';
import { SalleServiceService } from 'src/app/services/salle-service.service';

@Component({
  selector: 'app-ajout-salle',
  templateUrl: './ajout-salle.component.html',
  styleUrls: ['./ajout-salle.component.css']
})
export class AjoutSalleComponent implements OnInit {
  public frmSa : Salle={};
  public listSa : Salle[]=[]

  constructor(private route:Router,private salleService:SalleServiceService) { }

  ngOnInit(): void {
  }
  addSalle(){
 
    this.salleService.addSalles(this.frmSa).subscribe(res=>{
      console.log(res)
      this.route.navigate(['afficheSalle'])
  },
    
  error=>{
    console.log(error)
  }
    )
  }
}
