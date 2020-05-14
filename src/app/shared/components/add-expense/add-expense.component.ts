import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {ModalController} from '@ionic/angular';

import {ActionService} from '../../../services/action/action.service';
import {DatetimeService} from '../../../services/datetime/datetime.service';

@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
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
    }

    ngOnInit() {
    }

    initCreateExpense(): void {
        const expense = this.addExpenseForm.value;
        expense.createdOn = this.dateTimeService.selectedDate;
        if (!expense.createdOn) {
            expense.createdOn = this.dateTimeService.getCurrentDateTime();
        }
        this.actionService.createExpense(expense).then(() => {
            this.dismissModal();
        }).catch((err) => console.log(err));
    }

    dismissModal(): void {
        this.modalController.dismiss().then().catch();
    }
}
