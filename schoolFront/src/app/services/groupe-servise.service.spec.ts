import { TestBed } from '@angular/core/testing';

import { GroupeServiseService } from './groupe-servise.service';

describe('GroupeServiseService', () => {
  let service: GroupeServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
