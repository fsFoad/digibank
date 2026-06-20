import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFieldComponent } from './activity-field.component';

describe('UpdateActivityFieldComponent', () => {
  let component: ActivityFieldComponent;
  let fixture: ComponentFixture<ActivityFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
