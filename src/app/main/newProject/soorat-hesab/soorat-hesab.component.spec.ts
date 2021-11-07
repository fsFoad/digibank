import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SooratHesabComponent } from './soorat-hesab.component';

describe('SooratHesabComponent', () => {
  let component: SooratHesabComponent;
  let fixture: ComponentFixture<SooratHesabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SooratHesabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SooratHesabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
