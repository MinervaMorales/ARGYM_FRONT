import { TestBed } from '@angular/core/testing';

import { RoutineCategoryService } from './routine-category.service';

describe('RoutineCategoryService', () => {
  let service: RoutineCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutineCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
