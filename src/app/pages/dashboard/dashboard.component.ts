import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionLike} from 'rxjs';

import {ModalController} from '@ionic/angular';

import {ActionService} from '../../services/action/action.service';
import {DataService} from '../../services/data/data.service';
import {DatetimeService} from '../../services/datetime/datetime.service';
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
    installDate: Date;
    selectedDate: Date;
    dateSubscription: SubscriptionLike;

    constructor(
        private modalController: ModalController,
        private dataService: DataService,
        private actionsService: ActionService,
        private datetimeService: DatetimeService,
    ) {
        this.actionsService.getTodayExpensesFromLocal().then((expenses => this.expenses = expenses));
        this.installDate = this.datetimeService.installDate;
    }

    ngOnInit() {
        this.dateSubscription = this.datetimeService.getSelectedDateSubscription().subscribe({
            next: (date: Date) => {
                this.selectedDate = date;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
            }
        });
        this.subscription = this.dataService.getExpensesSubscription().subscribe({
            next: (expense: ExpenseInterface[]) => {
                if (expense != null) {
                    this.expenses = expense;
                } else {
                    this.expenses = [];
                }
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
            }
        });
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddExpenseComponent,
        });
        return await modal.present();
    }

    ngOnDestroy(): void {
    }

    changeSelectedDate(value: string): void {
        this.selectedDate = this.datetimeService.createDateFromString(value);
        this.datetimeService.setSelectedDate(value).then(() => {
            this.actionsService.emitExpensesByDateFromLocal(this.selectedDate);
        });
    }

    setCurrentToTodayDate(): void {
        this.datetimeService.setSelectedDate(this.datetimeService.getCurrentDateTime()).then(() => {
            this.actionsService.emitExpensesByDateFromLocal(this.selectedDate);
        });
    }
}
