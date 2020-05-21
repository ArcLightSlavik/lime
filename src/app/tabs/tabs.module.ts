import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';
import {TabsPageRoutingModule} from './tabs-routing.module';

import {BudgetModule} from '../pages/budget/budget.module';
import {AccountModule} from '../pages/account/account.module';
import {ActivityModule} from '../pages/activity/activity.module';
import {DashboardModule} from '../pages/dashboard/dashboard.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        DashboardModule,
        AccountModule,
        ActivityModule,
        BudgetModule,
    ],
    declarations: [
        TabsPage
    ]
})
export class TabsPageModule {
}
