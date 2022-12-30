import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Departement } from 'src/app/interfaces/departement';
import { Enseignat } from 'src/app/interfaces/enseignat';
import { DepartementServiceService } from 'src/app/services/departement-service.service';
import { EnseignantServiceService } from 'src/app/services/enseignant-service.service';

@Component({
  selector: 'app-affiche-departement',
  templateUrl: './affiche-departement.component.html',
  styleUrls: ['./affiche-departement.component.css']
})
export class AfficheDepartementComponent implements OnInit {

   
  public dep: Departement={};

  public currentDepartement: any;
  public currentindex: any;
  public closeResult = '';
  
  public enseignant:Enseignat={};
public listDep : Departement[]=[]
public listEn :Enseignat[]=[]

  constructor(private departementService: DepartementServiceService, private enseignantS:EnseignantServiceService, private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllDepartement();
    this.getallEnseignant();
  }
  getallEnseignant(){
    this.enseignantS.getAll().subscribe(res=>{
      this.listEn=res
    },
    error=>{error})
  }
  getAllDepartement(){
    this.departementService.getAll().subscribe(
      res=>{
        this.listDep=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.departementService.getById(id).subscribe(res => {
      console.log(res)
    })
  }


  currentdepartement(_grp: any, _index: any) {
    this.currentDepartement = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.departementService.delet(this.currentDepartement.codeDep).subscribe(res => { console.log(res) 
      this.getAllDepartement()
    })
    
  }

update():void{
  this.departementService.update(this.dep,this.currentDepartement.codeDep).subscribe(res=>{
    console.log(res)
    this.getAllDepartement()
  })
  
}



  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
