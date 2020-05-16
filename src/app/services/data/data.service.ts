import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ExpenseInterface} from '../../interface/expenseInterface';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly expenses: BehaviorSubject<ExpenseInterface[]>;
    private readonly totalExpenseForSelectedDay: BehaviorSubject<number>;

    constructor() {
        this.expenses = new BehaviorSubject<ExpenseInterface[]>(null);
        this.totalExpenseForSelectedDay = new BehaviorSubject(0);
    }

    getTodayTotalExpensesSubscription(): BehaviorSubject<number> {
        return this.totalExpenseForSelectedDay;
    }

    async setTodayTotalExpenses(total: number): Promise<void> {
        return this.totalExpenseForSelectedDay.next(total);
    }

    async getExpenses(): Promise<ExpenseInterface[]> {
        return this.expenses.getValue();
    }

    async setExpenses(expenses: ExpenseInterface[]): Promise<void> {
        if (expenses) {
            this.setTodayTotalExpenses(this.calculateTotalSelected(expenses));
        }
        return this.expenses.next(expenses);
    }

    getExpensesSubscription(): BehaviorSubject<ExpenseInterface[]> {
        return this.expenses;
    }

    calculateTotalSelected(expenses: ExpenseInterface[]): number {
        let total = 0;
        for (const expense of expenses) {
            total += expense.amount;
        }
        return total;
    }
}
