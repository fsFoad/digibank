import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetRemittanceCartableComponent } from './internet-remittance-cartable.component';

describe('InternetRemittanceCartableComponent', () => {
  let component: InternetRemittanceCartableComponent;
  let fixture: ComponentFixture<InternetRemittanceCartableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetRemittanceCartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetRemittanceCartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
