import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReliableRemittanceRequestComponent } from './details-reliable-remittance-request.component';

describe('DetailsReliableRemittanceRequestComponent', () => {
  let component: DetailsReliableRemittanceRequestComponent;
  let fixture: ComponentFixture<DetailsReliableRemittanceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsReliableRemittanceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsReliableRemittanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
