import {Component, OnInit, OnDestroy} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SubscriptionLike} from 'rxjs';

import {DataService} from '../../services/data/data.service';
import {ActionService} from '../../services/action/action.service';
import {ExpenseInterface} from '../../interface/expenseInterface';
import {AddExpenseComponent} from '../../shared/components/add-expense/add-expense.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

    expenses: ExpenseInterface[];
    subscription: SubscriptionLike;

    constructor(private modalController: ModalController, private dataService: DataService, private actionService: ActionService) {
        this.expenses = [];
        this.actionService.getTodayExpenseFromLocal().then((value => this.expenses = value));
    }

    ngOnInit() {
        this.subscription = this.dataService.getExpensesSubscription()
            .subscribe({
                next: (expense) => {
                    if (expense != null) {
                        this.expenses.push(expense);
                    }
                },
                error: () => {
                },
                complete: () => {
                }
            });
    }

    ngOnDestroy(): void {

    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddExpenseComponent,
        });
        return await modal.present();
    }
}
