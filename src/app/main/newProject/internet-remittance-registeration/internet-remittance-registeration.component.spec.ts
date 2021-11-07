import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetRemittanceRegisterationComponent } from './internet-remittance-registeration.component';

describe('InternetRemittanceRegisterationComponent', () => {
  let component: InternetRemittanceRegisterationComponent;
  let fixture: ComponentFixture<InternetRemittanceRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetRemittanceRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetRemittanceRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
