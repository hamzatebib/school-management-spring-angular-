import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimeGroupeComponent } from './supprime-groupe.component';

describe('SupprimeGroupeComponent', () => {
  let component: SupprimeGroupeComponent;
  let fixture: ComponentFixture<SupprimeGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimeGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimeGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
