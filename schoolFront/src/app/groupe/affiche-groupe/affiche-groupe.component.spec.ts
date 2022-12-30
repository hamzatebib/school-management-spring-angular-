import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheGroupeComponent } from './affiche-groupe.component';

describe('AfficheGroupeComponent', () => {
  let component: AfficheGroupeComponent;
  let fixture: ComponentFixture<AfficheGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
