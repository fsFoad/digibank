import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGhobozComponent } from './request-ghoboz.component';

describe('RequestGhobozComponent', () => {
  let component: RequestGhobozComponent;
  let fixture: ComponentFixture<RequestGhobozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestGhobozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestGhobozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
