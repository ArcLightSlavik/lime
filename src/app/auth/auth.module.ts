import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularFireAuthModule} from '@angular/fire/auth';

import {AuthService} from './services/auth/auth.service';
import {AuthRoutingModule} from './auth-routing.module';
import {LimeFormsModule} from '../utils/modules/lime-forms.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthRoutingModule,
        LimeFormsModule,
        AngularFireAuthModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {
}
