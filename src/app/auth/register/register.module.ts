import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {RegisterComponent} from './register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {LimeFormsModule} from '../../utils/modules/lime-forms.module';


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        LimeFormsModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule {
}
