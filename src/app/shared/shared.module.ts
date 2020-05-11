import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AddExpenseComponent } from './components/add-expense/add-expense.component';

@NgModule({
  declarations: [AddExpenseComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents: [
    AddExpenseComponent
  ]
})
export class SharedModule { }
