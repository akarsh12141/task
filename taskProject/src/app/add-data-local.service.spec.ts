import { TestBed } from '@angular/core/testing';

import { AddDataLocalService } from './add-data-local.service';

describe('AddDataLocalService', () => {
  let service: AddDataLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDataLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
