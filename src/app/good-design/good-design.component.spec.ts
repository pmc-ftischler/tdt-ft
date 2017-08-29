import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDesignComponent } from './good-design.component';

describe('GoodDesignComponent', () => {
  let component: GoodDesignComponent;
  let fixture: ComponentFixture<GoodDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
