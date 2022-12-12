import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import {AuthRespondeData, AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['auth.component.css']
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthRespondeData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.singup(email, password)
        }

        authObs.subscribe(
            resData => {
                this.isLoading = false;
                this.router.navigate(['/players'])
            },
            resError => {
                this.error = resError
                this.isLoading = false;
            }
        );
        form.reset();
    }

    onHandlerError() {
        this.error = null;
    }
}
