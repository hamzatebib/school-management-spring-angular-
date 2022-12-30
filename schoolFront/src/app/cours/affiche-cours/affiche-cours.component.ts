import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cours } from 'src/app/interfaces/cours';
import { Seance } from 'src/app/interfaces/seance';
import { CoursServiceService } from 'src/app/services/cours-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';

@Component({
  selector: 'app-affiche-cours',
  templateUrl: './affiche-cours.component.html',
  styleUrls: ['./affiche-cours.component.css']
})
export class AfficheCoursComponent implements OnInit {

  public cours: Cours={};

  public currentCours: any;
  public currentindex: any;
  public closeResult = '';
  //public etudiants : any;
  public seance:Seance={};
public listC : Cours[]=[]
public listS :Seance[]=[]
  constructor(private coursService: CoursServiceService, private seanceS:SeanceServiceService, private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCours();
    this.getallSeance();
  }
  getallSeance(){
    this.seanceS.getAll().subscribe(res=>{
      this.listS=res
    },
    error=>{error})
  }
  getAllCours(){
    this.coursService.getAll().subscribe(
      res=>{
        this.listC=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.coursService.getById(id).subscribe(res => {
      console.log(res)
    })
  }


  currentcours(_grp: any, _index: any) {
    this.currentCours = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.coursService.delet(this.currentCours.codeC).subscribe(res => { console.log(res) 
      this.getAllCours()
    })
    
  }

update():void{
  this.coursService.update(this.cours,this.currentCours.codeC).subscribe(res=>{
    console.log(res)
    this.getAllCours()
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
