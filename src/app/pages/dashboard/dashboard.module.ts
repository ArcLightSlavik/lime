import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {DashboardComponent} from './dashboard.component';
import {CategoryPipe} from '../../pipes/category.pipe';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [
        DashboardComponent,
        CategoryPipe
    ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: DashboardComponent}]),
    ],
})
export class DashboardModule {
}
