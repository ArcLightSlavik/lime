import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {ModalController} from '@ionic/angular';

import {ActionService} from '../../../services/action/action.service';
import {DatetimeService} from '../../../services/datetime/datetime.service';
import {ExpenseTypes} from '../../../constants/constants';

@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
    expenseTypes: any;
    addExpenseForm = new FormGroup({
        amount: new FormControl('', Validators.required),
        description: new FormControl(''),
        type: new FormControl('', Validators.required),
    });

    constructor(
        private modalController: ModalController,
        private actionService: ActionService,
        private dateTimeService: DatetimeService
    ) {
        this.expenseTypes = ExpenseTypes;
    }

    ngOnInit() {
    }

    initCreateExpense(): void {
        const expense = this.addExpenseForm.value;
        this.dateTimeService.getSelectedDate().then((date: Date) => {
            if (!expense.createdOn) {
                expense.createdOn = date;
            }
        }).then(() => {
            this.actionService.createExpense(expense).then(() => {
                this.dismissModal();
            }).catch((err) => console.log(err));
        });
    }

    dismissModal(): void {
        this.modalController.dismiss().then().catch();
    }
}
