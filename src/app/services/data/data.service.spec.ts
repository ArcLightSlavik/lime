import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {ExpenseInterface} from '../../interface/expenseInterface';

describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });

    it('Should Add All the Expenses', () => {
        const expectedTotal = 10;
        const mockExpenses: ExpenseInterface[] = [
            {
                amount: 5,
                type: 'Games',
                createdOn: new Date(),
                description: 'This is the description'
            },
            {
                amount: 5,
                type: 'Games',
                createdOn: new Date(),
                description: 'This is the description'
            }
        ];

        const service: DataService = TestBed.get(DataService);
        const actualTotal = service.calculateTotalSelected(mockExpenses);
        console.log(actualTotal);
        console.log(expectedTotal);
        expect(actualTotal).toEqual(expectedTotal);

    });
});
