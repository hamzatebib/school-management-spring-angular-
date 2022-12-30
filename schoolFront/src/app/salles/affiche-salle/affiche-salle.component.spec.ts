import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheSalleComponent } from './affiche-salle.component';

describe('AfficheSalleComponent', () => {
  let component: AfficheSalleComponent;
  let fixture: ComponentFixture<AfficheSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheSalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
