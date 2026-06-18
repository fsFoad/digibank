import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanckPayaGhabzComponent } from './banck-paya-ghabz.component';

describe('BanckPayaGhabzComponent', () => {
  let component: BanckPayaGhabzComponent;
  let fixture: ComponentFixture<BanckPayaGhabzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanckPayaGhabzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanckPayaGhabzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
