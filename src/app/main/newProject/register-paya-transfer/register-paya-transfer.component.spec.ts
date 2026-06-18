import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPayaTransferComponent } from './register-paya-transfer.component';

describe('RegisterPayaTransferComponent', () => {
  let component: RegisterPayaTransferComponent;
  let fixture: ComponentFixture<RegisterPayaTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPayaTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPayaTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
