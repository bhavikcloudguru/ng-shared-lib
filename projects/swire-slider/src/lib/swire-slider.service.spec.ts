import { TestBed } from '@angular/core/testing';

import { SwireSliderService } from './swire-slider.service';

describe('SwireSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwireSliderService = TestBed.get(SwireSliderService);
    expect(service).toBeTruthy();
  });
});
