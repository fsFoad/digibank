import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationsRequestSatnaComponent } from './specifications-request-satna.component';

describe('SpecificationsRequestSatnaComponent', () => {
  let component: SpecificationsRequestSatnaComponent;
  let fixture: ComponentFixture<SpecificationsRequestSatnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationsRequestSatnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationsRequestSatnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
