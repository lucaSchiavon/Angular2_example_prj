/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticoliService } from './articoli.service';

describe('ArticoliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticoliService]
    });
  });

  it('should ...', inject([ArticoliService], (service: ArticoliService) => {
    expect(service).toBeTruthy();
  }));
});
