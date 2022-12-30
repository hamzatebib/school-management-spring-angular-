import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheSeanceComponent } from './affiche-seance.component';

describe('AfficheSeanceComponent', () => {
  let component: AfficheSeanceComponent;
  let fixture: ComponentFixture<AfficheSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheSeanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
