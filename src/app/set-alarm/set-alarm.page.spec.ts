import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetAlarmPage } from './set-alarm.page';

describe('SetAlarmPage', () => {
  let component: SetAlarmPage;
  let fixture: ComponentFixture<SetAlarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAlarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetAlarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
