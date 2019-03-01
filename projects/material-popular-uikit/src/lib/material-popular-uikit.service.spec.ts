import { TestBed } from '@angular/core/testing';

import { MaterialPopularUikitService } from './material-popular-uikit.service';

describe('MaterialPopularUikitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialPopularUikitService = TestBed.get(MaterialPopularUikitService);
    expect(service).toBeTruthy();
  });
});
