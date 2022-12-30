import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheEtudiantComponent } from './affiche-etudiant.component';

describe('AfficheEtudiantComponent', () => {
  let component: AfficheEtudiantComponent;
  let fixture: ComponentFixture<AfficheEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
