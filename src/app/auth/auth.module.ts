import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LimeFormsModule} from '../utils/modules/lime-forms.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthRoutingModule,
        LimeFormsModule
    ]
})
export class AuthModule {
}
