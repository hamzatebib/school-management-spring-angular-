import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheDepartementComponent } from './affiche-departement.component';

describe('AfficheDepartementComponent', () => {
  let component: AfficheDepartementComponent;
  let fixture: ComponentFixture<AfficheDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
