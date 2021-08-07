import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectDetectionPage } from './object-detection.page';

describe('ObjectDetectionPage', () => {
  let component: ObjectDetectionPage;
  let fixture: ComponentFixture<ObjectDetectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDetectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
