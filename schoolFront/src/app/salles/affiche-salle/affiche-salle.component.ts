import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Salle } from 'src/app/interfaces/salle';
import { SalleServiceService } from 'src/app/services/salle-service.service';

@Component({
  selector: 'app-affiche-salle',
  templateUrl: './affiche-salle.component.html',
  styleUrls: ['./affiche-salle.component.css']
})
export class AfficheSalleComponent implements OnInit {
  salles: any;
 
  public salle: Salle={};
  currentSalle: any;
  currentindex: any;
  closeResult = '';
  constructor(private salleservise : SalleServiceService  , private router :RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllSalle();
  }
  getAllSalle(){
    this.salleservise.getAll().subscribe(
      res=>{
        this.salles=res
        console.log(res)
      }
    )
  }
  
  getId(id: any): void {
    this.salleservise.getId(id).subscribe(res => {
      console.log(res)
    })
  }


  currentsalle(_grp: any, _index: any) {
    this.currentSalle = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.salleservise.delet(this.currentSalle.num).subscribe(res => { console.log(res) 
      this.getAllSalle()
    })
    
  }

update():void{
  this.salleservise.update(this.salle,this.currentSalle.num).subscribe(res=>{
    console.log(res)
    this.getAllSalle()
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
