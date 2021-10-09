import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaRegisterTransferComponent } from './santa-register-transfer.component';

describe('SantaRegisterTransferComponent', () => {
  let component: SantaRegisterTransferComponent;
  let fixture: ComponentFixture<SantaRegisterTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaRegisterTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaRegisterTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
