import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoutesSampleComponent } from './child-routes-sample.component';

describe('ChildRoutesSampleComponent', () => {
  let component: ChildRoutesSampleComponent;
  let fixture: ComponentFixture<ChildRoutesSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRoutesSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRoutesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
