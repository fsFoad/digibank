import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInformationVarizComponent } from './submit-information-variz.component';

describe('SubmitInformationVarizComponent', () => {
  let component: SubmitInformationVarizComponent;
  let fixture: ComponentFixture<SubmitInformationVarizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitInformationVarizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInformationVarizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
