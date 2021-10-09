import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCheckComponent } from './submit-check.component';

describe('SubmitCheckComponent', () => {
  let component: SubmitCheckComponent;
  let fixture: ComponentFixture<SubmitCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
