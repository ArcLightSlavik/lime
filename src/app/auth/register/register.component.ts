import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

    private registrationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.min(8), Validators.required]),
        confirmPassword: new FormControl('', [Validators.min(8), Validators.required])
    });

    constructor() {
    }

    submitRegisterForm(): void {
        console.log('Register user request');
    }
}
