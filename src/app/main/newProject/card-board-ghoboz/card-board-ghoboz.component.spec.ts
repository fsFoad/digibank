import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoardGhobozComponent } from './card-board-ghoboz.component';

describe('CardBoardGhobozComponent', () => {
  let component: CardBoardGhobozComponent;
  let fixture: ComponentFixture<CardBoardGhobozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBoardGhobozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoardGhobozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
