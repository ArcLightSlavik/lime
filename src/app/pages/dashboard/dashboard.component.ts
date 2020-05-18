import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionLike} from 'rxjs';

import {ActionSheetController, ModalController} from '@ionic/angular';

import {DataService} from '../../services/data/data.service';
import {ExpenseTypes} from '../../constants/constants';
import {ExpenseService} from '../../services/storage/expense-storage.service';
import {DatetimeService} from '../../services/datetime/datetime.service';
import {ExpenseInterface} from '../../interface/expenseInterface';
import {AddExpenseComponent} from '../../shared/components/add-expense/add-expense.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
    installDate: Date;
    selectedDate: Date;
    todayDate: Date;

    subscription: SubscriptionLike;
    dateSubscription: SubscriptionLike;
    totalSubscription: SubscriptionLike;

    expenses: ExpenseInterface[];
    expenseTypes: any;
    todayTotal: number;

    filterByPrice: boolean;
    filterByPriceUp: boolean;

    constructor(
        private modalController: ModalController,
        private dataService: DataService,
        private expenseService: ExpenseService,
        private datetimeService: DatetimeService,
        private actionSheetController: ActionSheetController,
    ) {
        this.installDate = this.datetimeService.installDate;
        this.todayDate = this.datetimeService.getCurrentDateTime();
        this.expenseTypes = ExpenseTypes;
        this.todayTotal = null;
    }

    ngOnInit() {
        this.totalSubscription = this.dataService.getTodayTotalExpensesSubscription().subscribe({
            next: (total: number) => {
                this.todayTotal = total;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
            }
        });

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
            this.expenseService.emitExpensesByDateFromLocal(this.selectedDate);
        });
    }

    setCurrentToTodayDate(): void {
        this.datetimeService.setSelectedDate(this.datetimeService.getCurrentDateTime()).then(() => {
            this.expenseService.emitExpensesByDateFromLocal(this.selectedDate);
        });
    }

    priceFilter(): void {
        this.expenses = this.expenses.sort((a, b) => {
            if (a.amount > b.amount) {
                return this.filterByPriceUp ? 1 : -1;
            }
            if (b.amount > a.amount) {
                return this.filterByPriceUp ? -1 : 1;
            }
            return 0;
        });
        this.filterByPrice = true;
        this.filterByPriceUp = !this.filterByPriceUp;
    }

    async presentFilterActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Albums',
            buttons: [
                {
                    text: 'Price',
                    icon: 'logo-usd',
                    handler: () => {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Recent',
                    icon: 'cellular-outline',
                    handler: () => {
                        console.log('Play clicked');
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        });
        await actionSheet.present();
    }
}
