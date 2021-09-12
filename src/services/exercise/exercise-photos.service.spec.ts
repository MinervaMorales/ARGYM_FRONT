import { TestBed } from '@angular/core/testing';

import { ExercisePhotosService } from './exercise-photos.service';

describe('ExercisePhotosService', () => {
  let service: ExercisePhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercisePhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
