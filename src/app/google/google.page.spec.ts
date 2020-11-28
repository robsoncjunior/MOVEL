import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GooglePage } from './google.page';

describe('GooglePage', () => {
  let component: GooglePage;
  let fixture: ComponentFixture<GooglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
