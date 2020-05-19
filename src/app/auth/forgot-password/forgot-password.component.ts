import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {

    private forgotPasswordForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });

    constructor() {
    }

    submitForgotPasswordForm(): void {
        console.log('Password reset request');
    }
}
