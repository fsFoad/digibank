import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoardPayaComponent } from './card-board-paya.component';

describe('CardBoardPayaComponent', () => {
  let component: CardBoardPayaComponent;
  let fixture: ComponentFixture<CardBoardPayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBoardPayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBoardPayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
