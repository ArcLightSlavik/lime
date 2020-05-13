import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ExpenseInterface} from 'src/app/interface/expenseInterface';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private readonly expense: BehaviorSubject<ExpenseInterface>;


    constructor() {
        this.expense = new BehaviorSubject<ExpenseInterface>(null);
    }

    async getExpenses(): Promise<ExpenseInterface> {
        return this.expense.getValue();
    }

    async setExpenses(expenses: ExpenseInterface): Promise<void> {
        return this.expense.next(expenses);
    }

    getExpensesSubscription(): BehaviorSubject<ExpenseInterface> {
        return this.expense;
    }
}
