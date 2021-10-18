import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalEntityInfoViewerComponent } from './organizational-entity-info-viewer.component';

describe('OrganizationalEntityInfoViewerComponent', () => {
  let component: OrganizationalEntityInfoViewerComponent;
  let fixture: ComponentFixture<OrganizationalEntityInfoViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalEntityInfoViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalEntityInfoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
