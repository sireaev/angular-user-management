import { TestBed } from '@angular/core/testing';

import { AbstractService } from './abstract.service';

describe('AbstractService', () => {
  let service: AbstractService
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [AbstractService]
    })
    service = TestBed.get(AbstractService);
  });

  it('should be created', () => {
    const service: AbstractService = TestBed.get(AbstractService);
    expect(service).toBeTruthy();
  });

  it('should PUBLIC_URL be equal to localhost:3000', () => {
    expect(service['PUBLIC_URL']).toEqual('http://localhost:3000');
  });
});
