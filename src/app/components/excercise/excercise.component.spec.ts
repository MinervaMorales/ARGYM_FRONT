import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcerciseComponent } from './excercise.component';

describe('ExcerciseComponent', () => {
  let component: ExcerciseComponent;
  let fixture: ComponentFixture<ExcerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
