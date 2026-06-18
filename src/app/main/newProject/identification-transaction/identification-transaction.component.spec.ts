import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationTransactionComponent } from './identification-transaction.component';

describe('IdentificationTransactionComponent', () => {
  let component: IdentificationTransactionComponent;
  let fixture: ComponentFixture<IdentificationTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
