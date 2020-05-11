import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}])
  ]
})
export class DashboardModule { }
