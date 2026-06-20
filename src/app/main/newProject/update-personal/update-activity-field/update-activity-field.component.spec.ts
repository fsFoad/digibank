import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityFieldComponent } from './update-activity-field.component';

describe('UpdateActivityFieldComponent', () => {
  let component: UpdateActivityFieldComponent;
  let fixture: ComponentFixture<UpdateActivityFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
