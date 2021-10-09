import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPayaRegisterTransferComponent } from './regular-paya-register-transfer.component';

describe('RegularPayaRegisterTransferComponent', () => {
  let component: RegularPayaRegisterTransferComponent;
  let fixture: ComponentFixture<RegularPayaRegisterTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularPayaRegisterTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularPayaRegisterTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
