import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegconfComponent } from './regconf.component';

describe('RegconfComponent', () => {
  let component: RegconfComponent;
  let fixture: ComponentFixture<RegconfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegconfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
