import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardeshRizEnteghalVojoohComponent } from './gardesh-riz-enteghal-vojooh.component';

describe('GardeshRizEnteghalVojoohComponent', () => {
  let component: GardeshRizEnteghalVojoohComponent;
  let fixture: ComponentFixture<GardeshRizEnteghalVojoohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardeshRizEnteghalVojoohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardeshRizEnteghalVojoohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
