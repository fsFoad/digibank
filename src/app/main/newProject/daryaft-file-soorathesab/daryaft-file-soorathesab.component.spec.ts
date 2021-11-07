import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaryaftFileSoorathesabComponent } from './daryaft-file-soorathesab.component';

describe('DaryaftFileSoorathesabComponent', () => {
  let component: DaryaftFileSoorathesabComponent;
  let fixture: ComponentFixture<DaryaftFileSoorathesabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaryaftFileSoorathesabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaryaftFileSoorathesabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
