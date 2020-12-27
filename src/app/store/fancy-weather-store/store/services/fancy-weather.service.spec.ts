import { TestBed } from '@angular/core/testing';

import { FancyWeatherService } from './fancy-weather.service';

describe('FancyWeatherService', () => {
  let service: FancyWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FancyWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
