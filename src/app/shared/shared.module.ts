import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AddExpenseComponent} from './components/add-expense/add-expense.component';

@NgModule({
    declarations: [
        AddExpenseComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        AddExpenseComponent
    ]
})
export class SharedModule {
}
