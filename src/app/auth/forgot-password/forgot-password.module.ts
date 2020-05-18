import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {ForgotPasswordComponent} from './forgot-password.component';
import {ForgotPasswordRoutingModule} from './forgot-password-routing.module';


@NgModule({
    declarations: [
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ForgotPasswordRoutingModule
    ]
})
export class ForgotPasswordModule {
}
