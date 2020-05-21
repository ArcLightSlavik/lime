import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

    registrationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.min(8), Validators.required]),
        confirmPassword: new FormControl('', [Validators.min(8), Validators.required])
    });

    constructor(
        private authService: AuthService
    ) {
    }

    submitRegisterForm(): void {
        this.authService.registerWithEmailAndPassword(
            this.registrationForm.value.email,
            this.registrationForm.value.password
        ).subscribe({
            next: () => {
            }
        });
    }
}
