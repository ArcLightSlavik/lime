import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {LoginPageRoutingModule} from './login-routing.module';
import {LimeFormsModule} from '../../utils/modules/lime-forms.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LimeFormsModule,
        LoginPageRoutingModule
    ],
    declarations: [
        LoginPage
    ]
})
export class LoginPageModule {
}
