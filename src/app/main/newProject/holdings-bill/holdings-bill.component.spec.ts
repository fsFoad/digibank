import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsBillComponent } from './holdings-bill.component';

describe('HoldingsBillComponent', () => {
  let component: HoldingsBillComponent;
  let fixture: ComponentFixture<HoldingsBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingsBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
