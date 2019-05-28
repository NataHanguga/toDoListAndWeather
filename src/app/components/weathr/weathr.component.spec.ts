import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathrComponent } from './weathr.component';

describe('WeathrComponent', () => {
  let component: WeathrComponent;
  let fixture: ComponentFixture<WeathrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
