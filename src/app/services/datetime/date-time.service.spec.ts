import {TestBed} from '@angular/core/testing';

import {DateTimeService} from './date-time.service';

describe('DatetimeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DateTimeService = TestBed.get(DateTimeService);
        expect(service).toBeTruthy();
    });
});
