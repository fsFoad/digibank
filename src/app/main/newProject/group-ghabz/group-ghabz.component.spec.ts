import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupGhabzComponent } from './group-ghabz.component';

describe('GroupGhabzComponent', () => {
  let component: GroupGhabzComponent;
  let fixture: ComponentFixture<GroupGhabzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupGhabzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupGhabzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
