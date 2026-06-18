import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOfDirectorsEditorComponent } from './board-of-directors-editor.component';

describe('BoardOfDirectorsEditorComponent', () => {
  let component: BoardOfDirectorsEditorComponent;
  let fixture: ComponentFixture<BoardOfDirectorsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardOfDirectorsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardOfDirectorsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
