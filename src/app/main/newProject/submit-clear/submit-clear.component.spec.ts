import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitClearComponent } from './submit-clear.component';

describe('SubmitClearComponent', () => {
  let component: SubmitClearComponent;
  let fixture: ComponentFixture<SubmitClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
