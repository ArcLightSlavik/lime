import {Injectable} from '@angular/core';

import {DataService} from '../data/data.service';
import {StorageService} from '../storage/storage.service';
import {ExpenseInterface} from '../../interface/expenseInterface';

@Injectable({
    providedIn: 'root'
})
export class ActionService {
    constructor(
        private dataService: DataService,
        private storageService: StorageService
    ) {
    }

    async createExpense(expense: ExpenseInterface): Promise<void> {
        return await this.storageService.saveExpenseToLocal(expense).then(() => {
            this.dataService.setExpenses(expense);
        });
    }

    async getTodayExpensesFromLocal(): Promise<ExpenseInterface[]> {
        return await this.storageService.getExpensesFromLocal().then((expenses: ExpenseInterface[]) => {
            return expenses;
        });
    }
}
