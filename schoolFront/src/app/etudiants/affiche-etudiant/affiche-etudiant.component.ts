import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Etudiant } from 'src/app/interfaces/etudiant';
import { Groupe } from 'src/app/interfaces/groupe';
import { EtudiantServiceService } from 'src/app/services/etudiant-service.service';
import { GroupeServiseService } from 'src/app/services/groupe-servise.service';

@Component({
  selector: 'app-affiche-etudiant',
  templateUrl: './affiche-etudiant.component.html',
  styleUrls: ['./affiche-etudiant.component.css']
})
export class AfficheEtudiantComponent implements OnInit {

 
  public etudiant: Etudiant={};

  public currentEtudiant: any;
  public currentindex: any;
  public closeResult = '';
  //public etudiants : any;
  public group:Groupe={};
public listEt : Etudiant[]=[]
public listGrp :Groupe[]=[]

  constructor(private etudiantService: EtudiantServiceService, private groupeS:GroupeServiseService, private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllEtudiant();
    this.getallGrp();
  }
  getallGrp(){
    this.groupeS.getAll().subscribe(res=>{
      this.listGrp=res
    },
    error=>{error})
  }
  getAllEtudiant(){
    this.etudiantService.getAll().subscribe(
      res=>{
        this.listEt=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.etudiantService.getById(id).subscribe(res => {
      console.log(res)
    })
  }


  currentetudiant(_grp: any, _index: any) {
    this.currentEtudiant = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.etudiantService.delet(this.currentEtudiant.matricule).subscribe(res => { console.log(res) 
      this.getAllEtudiant()
    })
    
  }

update():void{
  this.etudiantService.update(this.etudiant,this.currentEtudiant.matricule).subscribe(res=>{
    console.log(res)
    this.getAllEtudiant()
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
