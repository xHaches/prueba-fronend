import { TestBed } from '@angular/core/testing';

import { UserModel } from './user';

describe('UserModel', () => {
  let service: UserModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
