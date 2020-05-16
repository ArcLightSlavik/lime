import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ExpenseInterface} from '../../interface/expenseInterface';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly expenses: BehaviorSubject<ExpenseInterface[]>;

    constructor() {
        this.expenses = new BehaviorSubject<ExpenseInterface[]>(null);
    }

    async getExpenses(): Promise<ExpenseInterface[]> {
        return this.expenses.getValue();
    }

    async setExpenses(expenses: ExpenseInterface[]): Promise<void> {
        return this.expenses.next(expenses);
    }

    getExpensesSubscription(): BehaviorSubject<ExpenseInterface[]> {
        return this.expenses;
    }
}
