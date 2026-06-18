import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RafeEnsedadBonCardComponent } from './rafe-ensedad-bon-card.component';

describe('RafeEnsedadBonCardComponent', () => {
  let component: RafeEnsedadBonCardComponent;
  let fixture: ComponentFixture<RafeEnsedadBonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RafeEnsedadBonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RafeEnsedadBonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
