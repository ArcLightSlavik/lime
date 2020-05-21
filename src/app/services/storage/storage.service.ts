import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

import {DataService} from '../data/data.service';
import {DatetimeService} from '../datetime/datetime.service';
import {ExpenseInterface} from '../../interface/expenseInterface';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(
        private dateTimeService: DatetimeService,
        private dataService: DataService
    ) {
    }

    async saveExpenseToLocal(expense: ExpenseInterface): Promise<void> {
        const key = this.dateTimeService.getDateTimeISOWithFormat(expense.createdOn);
        let expenseList: ExpenseInterface[] = [];
        return this.getFromLocalStorage(key).then((expenses: ExpenseInterface[]) => {
            if (expenses == null) {
                expenseList.push(expense);
            } else {
                expenseList = expenses;
                expenseList.push(expense);
            }
        }).then(() => {
            this.saveToLocalStorage(key, expenseList).then(() => {
                this.dataService.setExpenses(expenseList);
            });
        }).catch((err) => console.log(err));
    }

    async getExpensesFromLocal(date?: Date): Promise<ExpenseInterface[]> {
        const key = this.dateTimeService.getDateTimeISOWithFormat(date);
        return await this.getFromLocalStorage(key).then((expenses: ExpenseInterface[]) => {
            return expenses;
        });
    }

    async saveToLocalStorage(key: string, value: any): Promise<void> {
        return await Plugins.Storage.set({
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

    async clearLocalStorage(isReset?: boolean): Promise<void> {
        if (isReset) {
            await this.dataService.setExpenses([]);
        }
        return await Plugins.Storage.clear();
    }
}
