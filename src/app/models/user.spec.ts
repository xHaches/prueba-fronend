import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserModel } from './user';

describe('UserModel', () => {
  let service: UserModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });
  
  beforeEach(() => {
    service = TestBed.inject(UserModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
