import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYektaComponent } from './create-yekta.component';

describe('CreateYektaComponent', () => {
  let component: CreateYektaComponent;
  let fixture: ComponentFixture<CreateYektaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYektaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
