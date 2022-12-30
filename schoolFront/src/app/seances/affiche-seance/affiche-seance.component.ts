import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Salle } from 'src/app/interfaces/salle';
import { Seance } from 'src/app/interfaces/seance';
import { SalleServiceService } from 'src/app/services/salle-service.service';
import { SeanceServiceService } from 'src/app/services/seance-service.service';

@Component({
  selector: 'app-affiche-seance',
  templateUrl: './affiche-seance.component.html',
  styleUrls: ['./affiche-seance.component.css']
})
export class AfficheSeanceComponent implements OnInit {

  public seance: Seance={};

  public currentSeance: any;
  public currentindex: any;
  public closeResult = '';
  //public etudiants : any;
  public salle:Salle={};
public listS : Seance[]=[]
public listSa :Salle[]=[]

  constructor(private seanceService: SeanceServiceService, private SalleS:SalleServiceService, private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllSeance();
    this.getallSalle();
  }
  getallSalle(){
    this.SalleS.getAll().subscribe(res=>{
      this.listSa=res
    },
    error=>{error})
  }
  getAllSeance(){
    this.seanceService.getAll().subscribe(
      res=>{
        this.listS=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.seanceService.getById(id).subscribe(res => {
      console.log(res)
    })
  }


  currentseance(_grp: any, _index: any) {
    this.currentSeance = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.seanceService.delet(this.currentSeance.id).subscribe(res => { console.log(res) 
      this.getAllSeance()
    })
    
  }

update():void{
  this.seanceService.update(this.seance,this.currentSeance.id).subscribe(res=>{
    console.log(res)
    this.getAllSeance()
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
