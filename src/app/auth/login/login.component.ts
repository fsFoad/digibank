import { Component, OnInit } from '@angular/core';
import { LoginService } from "../guard/login.service";
import { Router } from "@angular/router";
import { MessageService, NotifierService } from "../../main/shared/notifier/notifier.module";
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [NotifierService, MessageService],
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;
    droplist = [

        { name: 'رمز ثابت', code: 1, countryCode: '1' },
        { name: 'شناسایی دو عاملی', code: 2, countryCode: '2' },
    ]
    errorMessage: string;
    constructor(
        private loginService: LoginService,
        private router: Router,
        private _fuseConfigService: FuseConfigService,
        private notifierService: NotifierService
    ) {
        this._fuseConfigService.config = { layout: { noMenu: true, content: { noPadding: true } } };
    }

    ngOnInit(): void {
    }

    login() {
        if (this.userName === 'user1' && this.password === 'pass1') {
            this.loginService.authenticated = true;
            this.router.navigate(['/'])
        } else {
            this.notifierService.showError({ detail: 'نام کاربری یا رمز عبور معتبر نمی باشد' })
            this.loginService.authenticated = false;
        }
    }
}
