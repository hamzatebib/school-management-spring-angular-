import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupeServiseService } from 'src/app/services/groupe-servise.service';


@Component({
  selector: 'app-ajout-groupe',
  templateUrl: './ajout-groupe.component.html',
  styleUrls: ['./ajout-groupe.component.css']
})
export class AjoutGroupeComponent implements OnInit {
  frm ={
  //  code: 0,
    nom:""
    
  }
  constructor(private route:Router,private groupeService:GroupeServiseService) { }

  ngOnInit(): void {
  }
  addGroupe(){
    const data ={
     // code:this.frm.code,
      nom:this.frm.nom
    };
    this.groupeService.addGroupes(data).subscribe(res=>{
      console.log(res)
      this.route.navigate(['affiche'])
  }
  
    )
  }
}
