import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySignatureEditorComponent } from './party-signature-editor.component';

describe('PartySignatureEditorComponent', () => {
  let component: PartySignatureEditorComponent;
  let fixture: ComponentFixture<PartySignatureEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySignatureEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySignatureEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
