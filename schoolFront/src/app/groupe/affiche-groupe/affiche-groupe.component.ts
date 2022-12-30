import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Groupe } from 'src/app/interfaces/groupe';
import { GroupeServiseService } from 'src/app/services/groupe-servise.service';


@Component({
  selector: 'app-affiche-groupe',
  templateUrl: './affiche-groupe.component.html',
  styleUrls: ['./affiche-groupe.component.css']
})
export class AfficheGroupeComponent implements OnInit {
  // groupe: Groupe = {};
  groupes: any;
  public groupe: Groupe={};
  currentGroupe: any;
  currentindex: any;
  closeResult = '';

  constructor(private groupeservise: GroupeServiseService, private router: RouterModule,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllGroupe();
  }
  getAllGroupe() {
    this.groupeservise.getAll().subscribe(
      res => {
        this.groupes = res
        console.log(res)
      }
    )
  }


  getId(id: any): void {
    this.groupeservise.getId(id).subscribe(res => {
      console.log(res)
    })
  }


  currentGrp(_grp: any, _index: any) {
    this.currentGroupe = _grp
    this.currentindex = _index
  }

  delet(): void {
    this.groupeservise.delet(this.currentGroupe.code).subscribe(res => { console.log(res)
      this.getAllGroupe()
    })
    
  }

update():void{
  this.groupeservise.update(this.groupe,this.currentGroupe.code).subscribe(res=>{
    console.log(res)
    this.getAllGroupe()
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
