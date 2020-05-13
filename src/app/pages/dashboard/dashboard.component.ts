import {Component, OnInit, OnDestroy} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SubscriptionLike} from 'rxjs';
import {AddExpenseComponent} from 'src/app/shared/components/add-expense/add-expense.component';
import {DataService} from 'src/app/services/data/data.service';
import {ExpenseInterface} from 'src/app/interface/expenseInterface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

    expenses: ExpenseInterface[];
    subscription: SubscriptionLike;

    constructor(private modalController: ModalController, private dataService: DataService) {
        this.expenses = [];
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
