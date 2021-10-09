import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryCheckComponent } from './inquiry-check.component';

describe('InquiryCheckComponent', () => {
  let component: InquiryCheckComponent;
  let fixture: ComponentFixture<InquiryCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
