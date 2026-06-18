import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetRemittanceCartableDetailsComponent } from './internet-remittance-cartable-details.component';

describe('InternetRemittanceCartableDetailsComponent', () => {
  let component: InternetRemittanceCartableDetailsComponent;
  let fixture: ComponentFixture<InternetRemittanceCartableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetRemittanceCartableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetRemittanceCartableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
