import { Component, OnInit } from '@angular/core';
import { LoginService } from "../guard/login.service";
import { Router } from "@angular/router";
import { NotifierService } from "../../main/shared/notifier/notifier.module";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;
    droplist = [
        { label: 'رمز ثابت', value: 1 },
        { label: 'شناسایی دو عاملی', value: 2 },
    ]
    errorMessage: string;
    loading: boolean;
    constructor(
        private loginService: LoginService,
        private router: Router,
        private notifierService: NotifierService
    ) {
    }

    ngOnInit(): void {
    }

    login() {
        if (!this.userName || !this.password) {
            this.notifierService.showWarning({ detail: 'لطفا نام کاربری و رمز عبور را وارد نمائید' });
            return;
        }
        this.loading = true;
        setTimeout(() => {
            if (this.userName === 'user1' && this.password === 'pass1') {
                this.loginService.authenticated = true;
                this.router.navigate(['/'])
            } else {
                this.notifierService.showError({ detail: 'نام کاربری یا رمز عبور معتبر نمی باشد' })
                // this.errorMessage = 'نام کاربری یا رمز عبور معتبر نمی باشد';
                this.loginService.authenticated = false;
                this.loading = false;
            }
        }, 3500)
    }
}
