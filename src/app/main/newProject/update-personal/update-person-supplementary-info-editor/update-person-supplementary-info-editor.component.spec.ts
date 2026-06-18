import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonSupplementaryInfoEditorComponent } from './update-person-supplementary-info-editor.component';

describe('UpdatePersonSupplementaryInfoEditorComponent', () => {
  let component: UpdatePersonSupplementaryInfoEditorComponent;
  let fixture: ComponentFixture<UpdatePersonSupplementaryInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonSupplementaryInfoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonSupplementaryInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
