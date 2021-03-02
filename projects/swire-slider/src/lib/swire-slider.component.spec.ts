import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwireSliderComponent } from './swire-slider.component';

describe('SwireSliderComponent', () => {
  let component: SwireSliderComponent;
  let fixture: ComponentFixture<SwireSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwireSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwireSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
