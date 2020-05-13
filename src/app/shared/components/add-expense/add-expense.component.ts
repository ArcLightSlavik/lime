import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {ActionService} from '../../../services/action/action.service';
import {DateTimeService} from '../../../services/datetime/date-time.service';

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

    constructor(private modalController: ModalController, private actionService: ActionService, private dateTimeService: DateTimeService) {

    }

    ngOnInit() {
    }

    initCreateExpense(): void {
        const expense = this.addExpenseForm.value;
        expense.createOn = this.dateTimeService.getCurrentDateTime();
        this.actionService.createExpense(expense).then(() => {
            this.dismissModal();
        }).catch((error) => console.log(error));
    }

    dismissModal(): void {
        this.modalController.dismiss().then().catch();
    }
}
