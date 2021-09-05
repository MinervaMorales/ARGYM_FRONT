import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutineCategoryLevelWorkoutsPage } from './routine-category-level-workouts.page';

describe('RoutineCategoryLevelWorkoutsPage', () => {
  let component: RoutineCategoryLevelWorkoutsPage;
  let fixture: ComponentFixture<RoutineCategoryLevelWorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineCategoryLevelWorkoutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutineCategoryLevelWorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
