import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingBonCardComponent } from './billing-bon-card.component';

describe('BillingBonCardComponent', () => {
  let component: BillingBonCardComponent;
  let fixture: ComponentFixture<BillingBonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingBonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingBonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
