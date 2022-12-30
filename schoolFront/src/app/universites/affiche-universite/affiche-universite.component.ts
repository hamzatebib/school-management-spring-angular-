import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Departement } from 'src/app/interfaces/departement';
import { Universite } from 'src/app/interfaces/universite';
import { DepartementServiceService } from 'src/app/services/departement-service.service';
import { UniversiteServiceService } from 'src/app/services/universite-service.service';

@Component({
  selector: 'app-affiche-universite',
  templateUrl: './affiche-universite.component.html',
  styleUrls: ['./affiche-universite.component.css']
})
export class AfficheUniversiteComponent implements OnInit {

  public universite: Universite={};

  public currentUniversite: any;
  public currentindex: any;
  public closeResult = '';
  //public etudiants : any;
  public departement:Departement={};
public listU : Universite[]=[]
public listDep :Departement[]=[]

  constructor(private universiteService: UniversiteServiceService, private departementS:DepartementServiceService, private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllUniversite();
    this.getallDepartement();
  }
  getallDepartement(){
    this.departementS.getAll().subscribe(res=>{
      this.listDep=res
    },
    error=>{error})
  }
  getAllUniversite(){
    this.universiteService.getAll().subscribe(
      res=>{
        this.listU=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.universiteService.getById(id).subscribe(res => {
      console.log(res)
    })
  }


  currentuniversite(_grp: any, _index: any) {
    this.currentUniversite = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.universiteService.delet(this.currentUniversite.codeUnv).subscribe(res => { console.log(res) 
      this.getAllUniversite()
    })
    
  }

update():void{
  this.universiteService.update(this.universite,this.currentUniversite.codeUnv).subscribe(res=>{
    console.log(res)
    this.getAllUniversite()
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
