import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoardSatnaComponent } from './card-board-satna.component';

describe('CardBoardSatnaComponent', () => {
  let component: CardBoardSatnaComponent;
  let fixture: ComponentFixture<CardBoardSatnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBoardSatnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoardSatnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
