import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    showPassword = false;
    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.min(8)])
    });

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.authService.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe({
                next: (res) => console.log(res),
                error: (err) => console.log(err)
            });
    }

    togglePasswordView(): void {
        this.showPassword = !this.showPassword;
    }

    submitLoginFrom(): void {
    }
}
