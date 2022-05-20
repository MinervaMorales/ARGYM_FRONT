import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstPersonTrainingRoutineCategoryLevelWorkoutsPage } from './first-person-training-routine-category-level-workouts.page';

describe('FirstPersonTrainingRoutineCategoryLevelWorkoutsPage', () => {
  let component: FirstPersonTrainingRoutineCategoryLevelWorkoutsPage;
  let fixture: ComponentFixture<FirstPersonTrainingRoutineCategoryLevelWorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPersonTrainingRoutineCategoryLevelWorkoutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPersonTrainingRoutineCategoryLevelWorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
