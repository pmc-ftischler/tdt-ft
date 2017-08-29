import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadDesignComponent } from './bad-design.component';

describe('BadDesignComponent', () => {
  let component: BadDesignComponent;
  let fixture: ComponentFixture<BadDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
