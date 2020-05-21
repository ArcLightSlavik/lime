import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {ModalController} from '@ionic/angular';

import {ExpenseTypes} from '../../../constants/constants';
import {ExpenseService} from '../../../services/storage/expense-storage.service';
import {DatetimeService} from '../../../services/datetime/datetime.service';
import {ExpenseInterface} from '../../../interface/expenseInterface';

@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent {
    expenseTypes: any;
    addExpenseForm = new FormGroup({
        amount: new FormControl('', Validators.required),
        description: new FormControl(''),
        type: new FormControl('', Validators.required),
    });

    constructor(
        private modalController: ModalController,
        private expenseService: ExpenseService,
        private dateTimeService: DatetimeService
    ) {
        this.expenseTypes = ExpenseTypes;
    }

    initCreateExpense(): void {
        const expense: ExpenseInterface = this.addExpenseForm.value;
        expense.amount = Number(expense.amount.toFixed(2));
        this.dateTimeService.getSelectedDate().then((date: Date) => {
            if (!expense.createdOn) {
                expense.createdOn = date;
            }
        }).then(() => {
            this.expenseService.createExpense(expense).then(() => {
                this.dismissModal();
            }).catch((err) => console.log(err));
        });
    }

    dismissModal(): void {
        this.modalController.dismiss().then().catch();
    }
}
