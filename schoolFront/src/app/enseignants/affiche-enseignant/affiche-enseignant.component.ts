import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Enseignat } from 'src/app/interfaces/enseignat';
import { Seance } from 'src/app/interfaces/seance';
import { EnseignantServiceService } from 'src/app/services/enseignant-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';

@Component({
  selector: 'app-affiche-enseignant',
  templateUrl: './affiche-enseignant.component.html',
  styleUrls: ['./affiche-enseignant.component.css']
})
export class AfficheEnseignantComponent implements OnInit {

  
  public enseignant: Enseignat={};

  public currentEnseignant: any;
  public currentindex: any;
  public closeResult = '';
  
  public seance:Seance={};
public listEn : Enseignat[]=[]
public listS :Seance[]=[]

  constructor(private enseignantService: EnseignantServiceService, private seanceS:SeanceServiceService, private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllEnseignant();
    this.getallSeance();
  }
  getallSeance(){
    this.seanceS.getAll().subscribe(res=>{
      this.listS=res
    },
    error=>{error})
  }
  getAllEnseignant(){
    this.enseignantService.getAll().subscribe(
      res=>{
        this.listEn=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.enseignantService.getById(id).subscribe(res => {
      console.log(res)
    })
  }


  currentenseignant(_grp: any, _index: any) {
    this.currentEnseignant = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.enseignantService.delet(this.currentEnseignant.matricule).subscribe(res => { console.log(res) 
      this.getAllEnseignant()
    })
    
  }

update():void{
  this.enseignantService.update(this.enseignant,this.currentEnseignant.matricule).subscribe(res=>{
    console.log(res)
    this.getAllEnseignant()
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
