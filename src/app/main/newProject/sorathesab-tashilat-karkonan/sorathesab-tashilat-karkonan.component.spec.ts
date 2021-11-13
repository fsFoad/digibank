import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorathesabTashilatKarkonanComponent } from './sorathesab-tashilat-karkonan.component';

describe('SorathesabTashilatKarkonanComponent', () => {
  let component: SorathesabTashilatKarkonanComponent;
  let fixture: ComponentFixture<SorathesabTashilatKarkonanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorathesabTashilatKarkonanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorathesabTashilatKarkonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
