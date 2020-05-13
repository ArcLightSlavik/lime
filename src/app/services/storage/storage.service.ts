import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

import {DateTimeService} from '../datetime/date-time.service';
import {ExpenseInterface} from '../../interface/expenseInterface';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private dateTimeService: DateTimeService) {
    }

    async saveExpenseToLocal(expense: ExpenseInterface): Promise<void> {
        const key = this.dateTimeService.getDateTimeString();
        let existingExpenses: ExpenseInterface[] = [];
        this.getFromLocalStorage(key).then((expenses: ExpenseInterface[]) => {
            if (expenses == null) {
                existingExpenses.push(expense);
            } else {
                existingExpenses = expenses;
                existingExpenses.push(expense);
            }
        }).then(() => {
            this.saveToLocalStorage(key, existingExpenses);
        }).catch((err) => {
            console.log(err);
        });
    }

    async getExpensesFromLocal(date?: Date): Promise<ExpenseInterface[]> {
        const key = this.dateTimeService.getDateTimeString(date);
        return await this.getFromLocalStorage(key).then((expenses: ExpenseInterface[]) => {
            return expenses;
        });
    }

    async saveToLocalStorage(key: string, value: ExpenseInterface[]) {
        await Plugins.Storage.set({
            key,
            value: JSON.stringify(value),
        });
    }

    async getFromLocalStorage(key: string): Promise<any> {
        const ret = await Plugins.Storage.get({key});
        return JSON.parse(ret.value);
    }

    async removeFromLocalStorage(key: string): Promise<void> {
        return await Plugins.Storage.remove({key});
    }

    async clearLocalStorage(): Promise<void> {
        return await Plugins.Storage.clear();
    }
}
