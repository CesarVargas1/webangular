import { TestBed } from '@angular/core/testing';

import { ScriptjsService } from './scriptjs.service';

describe('ScriptjsService', () => {
  let service: ScriptjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
