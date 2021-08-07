import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadBlogPage } from './read-blog.page';

describe('ReadBlogPage', () => {
  let component: ReadBlogPage;
  let fixture: ComponentFixture<ReadBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
