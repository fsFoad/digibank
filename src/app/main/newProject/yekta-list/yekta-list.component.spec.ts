import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YektaListComponent } from './yekta-list.component';

describe('YektaListComponent', () => {
  let component: YektaListComponent;
  let fixture: ComponentFixture<YektaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YektaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YektaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
