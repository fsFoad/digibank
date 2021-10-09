import {Component, OnInit} from '@angular/core';
import {LoginService} from "../guard/login.service";
import {Router} from "@angular/router";
import {NotifierService} from "../../main/shared/notifier/notifier.module";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;
    droplist = [

        {name: 'رمز ثابت', code: 1, countryCode: '1'},
        {name: 'شناسایی دو عاملی', code:2, countryCode: '2'},
    ]
    constructor(private loginService: LoginService, private router: Router, private notifierService: NotifierService) {
    }

    ngOnInit(): void {
    }

    login() {
        console.log(this.userName + '  ' + this.password);
        this.router.navigate(['/dashboard'])
        // if (this.userName === 'resalat' && this.password === 'resalat') {
        //     this.loginService.authenticated = true;
        //     this.router.navigate(['/dashboard'])
        // } else {
        //     this.notifierService.showError({detail: 'نام کاربری یا رمز عبور معتبر نمی باشد'})
        //     this.loginService.authenticated = false;
        // }
    }
}
