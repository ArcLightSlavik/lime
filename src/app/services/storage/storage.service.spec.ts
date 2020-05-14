import {TestBed} from '@angular/core/testing';

import {StorageService} from './storage.service';

let storageService: StorageService;

describe('StorageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StorageService,
            ],
        });
        storageService = TestBed.get(StorageService);
    });

    it('StorageService should be created', () => {
        const service: StorageService = TestBed.get(StorageService);
        expect(service).toBeTruthy();
    });

    it('saveToLocalStorage() | getFromLocalStorage()', (doneFn) => {
        const object = {test: 'test'};
        storageService.saveToLocalStorage('test', object);
        storageService.getFromLocalStorage('test').then((val) => {
            expect(val).toEqual(object);
            doneFn();
        });
    });

    it('removeFromLocalStorage() | getFromLocalStorage()', (doneFn) => {
        const object = {test: 'test'};
        storageService.saveToLocalStorage('test', object);
        storageService.removeFromLocalStorage('test').then((val) => {
            expect(val).toEqual(undefined);
            doneFn();
        });
    });

    it('clearLocalStorage() | getFromLocalStorage()', (doneFn) => {
        const object = {test: 'test'};
        storageService.saveToLocalStorage('test', object);
        storageService.clearLocalStorage().then((val) => {
            expect(val).toEqual(undefined);
            doneFn();
        });
    });
});
