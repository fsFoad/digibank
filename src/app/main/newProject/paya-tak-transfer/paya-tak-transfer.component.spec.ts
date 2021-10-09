import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayaTakTransferComponent } from './paya-tak-transfer.component';

describe('PayaTakTransferComponent', () => {
  let component: PayaTakTransferComponent;
  let fixture: ComponentFixture<PayaTakTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayaTakTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayaTakTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
