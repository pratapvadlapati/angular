import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotCharecterComponent } from './got-charecter.component';

describe('GotCharecterComponent', () => {
  let component: GotCharecterComponent;
  let fixture: ComponentFixture<GotCharecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotCharecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotCharecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
