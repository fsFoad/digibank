import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfFacilitiesReceivedComponent } from './chart-of-facilities-received.component';

describe('ChartOfFacilitiesReceivedComponent', () => {
  let component: ChartOfFacilitiesReceivedComponent;
  let fixture: ComponentFixture<ChartOfFacilitiesReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartOfFacilitiesReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfFacilitiesReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
