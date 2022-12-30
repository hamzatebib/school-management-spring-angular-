import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCoursComponent } from './affiche-cours.component';

describe('AfficheCoursComponent', () => {
  let component: AfficheCoursComponent;
  let fixture: ComponentFixture<AfficheCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
