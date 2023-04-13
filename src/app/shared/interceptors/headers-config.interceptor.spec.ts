import { TestBed } from '@angular/core/testing';

import { HeadersConfigInterceptor } from './headers-config.interceptor';

describe('HeadersConfigInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadersConfigInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadersConfigInterceptor = TestBed.inject(HeadersConfigInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
