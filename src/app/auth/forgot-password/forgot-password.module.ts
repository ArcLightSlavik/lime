import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {ForgotPasswordComponent} from './forgot-password.component';
import {ForgotPasswordRoutingModule} from './forgot-password-routing.module';
import {LimeFormsModule} from '../../utils/modules/lime-forms.module';


@NgModule({
    declarations: [
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        LimeFormsModule,
        ForgotPasswordRoutingModule
    ]
})
export class ForgotPasswordModule {
}
