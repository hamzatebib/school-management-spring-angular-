import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/interfaces/etudiant';
import { Groupe } from 'src/app/interfaces/groupe';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { GroupeServiseService } from 'src/app/services/groupe-servise.service';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {

public frmEt : Etudiant={};
public listEt : Etudiant[]=[]
public listGrp :Groupe[]=[]
  etudiants: any;
  constructor(private route:Router,private etudiantService:EtudiantServiceService, private groupeS:GroupeServiseService) { }

  ngOnInit(): void {
    this.getallGrp()
  }

getallGrp(){
  this.groupeS.getAll().subscribe(res=>{
    this.listGrp=res
  },
  error=>{error})
}

  addEtudiant(){
 
    this.etudiantService.addEtudiants(this.frmEt).subscribe(res=>{
      console.log(res)
      this.route.navigate(['afficheEtudiant'])
  },
    
  error=>{
    console.log(error)
  }
    )
  }
}
