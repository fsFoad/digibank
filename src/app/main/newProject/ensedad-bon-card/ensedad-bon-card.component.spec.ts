import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsedadBonCardComponent } from './ensedad-bon-card.component';

describe('EnsedadBonCardComponent', () => {
  let component: EnsedadBonCardComponent;
  let fixture: ComponentFixture<EnsedadBonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsedadBonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsedadBonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
