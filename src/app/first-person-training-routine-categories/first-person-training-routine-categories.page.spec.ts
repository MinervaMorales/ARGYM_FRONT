import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstPersonTrainingRoutineCategoriesPage } from './first-person-training-routine-categories.page';

describe('FirstPersonTrainingRoutineCategoriesPage', () => {
  let component: FirstPersonTrainingRoutineCategoriesPage;
  let fixture: ComponentFixture<FirstPersonTrainingRoutineCategoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPersonTrainingRoutineCategoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPersonTrainingRoutineCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
