import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoutineCategoriesFilterPage } from './routine-categories-filter.page';

describe('RoutineCategoriesFilterPage', () => {
  let component: RoutineCategoriesFilterPage;
  let fixture: ComponentFixture<RoutineCategoriesFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineCategoriesFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoutineCategoriesFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
