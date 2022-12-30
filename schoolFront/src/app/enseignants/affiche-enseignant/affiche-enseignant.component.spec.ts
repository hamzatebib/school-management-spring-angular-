import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheEnseignantComponent } from './affiche-enseignant.component';

describe('AfficheEnseignantComponent', () => {
  let component: AfficheEnseignantComponent;
  let fixture: ComponentFixture<AfficheEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
