import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {NotifierService} from "../notifier/notifier.module";
import {isPersian} from "persian-tools2";
import {TranslateService} from "@ngx-translate/core";
import {PrimengProgressBarService} from "../../../../@fuse/components/primeng-progress-bar/primeng-progress-bar.component";


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private notifierService: NotifierService,private translateService:TranslateService,
                private progressBarService: PrimengProgressBarService,) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = request.clone({
            headers: request.headers.set('lang-msg', this.translateService.currentLang?this.translateService.currentLang:'fa').set(
                'Access-Control-Allow-Origin','*').set('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE').set(
                    'Access-Control-Allow-Credentials','true'
            )
        });
        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (event.status === 204) {
                        this.progressBarService.hide();
                        this.notifierService.showWarning({detail:
                                this.translateService.instant('label.http.status.204'), life: 5000});
                        return;
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.progressBarService.hide();
                switch (error.status) {
                        case 400: {
                            if (error.error.apierror?.message) {
                                this.notifierService.showError({
                                    detail: error.error.apierror.message,
                                    life: 5000
                                });
                            } else {
                                this.notifierService.showError({
                                    detail: this.translateService.instant('label.http.status.400'),
                                    life: 5000
                                });
                            }

                        }
                            break;
                        case (404):
                            this.notifierService.showError({
                                detail: this.translateService.instant('label.http.status.404'),
                                life: 5000
                            });
                            break;
                            case (0):
                            this.notifierService.showError({
                                detail: this.translateService.instant('label.http.status.0'),
                                life: 5000
                            });
                            break;
                        case (500): {
                            this.notifierService.showError({
                                detail: this.translateService.instant('label.http.status.500'),
                                life: 5000
                            });
                            // if (error.error.apierror?.error) {
                            //     if (isPersian(error.error.apierror.error[0])) {
                            //         this.notifierService.showError({detail: error.error.apierror.error[0], life: 5000});
                            //     } else {
                            //         this.notifierService.showError({
                            //             detail: this.translateService.instant('label.http.status.500'),
                            //             life: 5000
                            //         });
                            //     }
                            // } else {
                            //     if (error.error.apierror?.message) {
                            //         if (isPersian(error.error.apierror?.message)) {
                            //             this.notifierService.showError({detail: error.error.apierror.message, life: 5000});
                            //         } else {
                            //             this.notifierService.showError({
                            //                 detail: this.translateService.instant('label.http.status.500'),
                            //                 life: 5000
                            //             });
                            //         }
                            //     } else {
                            //         this.notifierService.showError({
                            //             detail: this.translateService.instant('label.http.status.500'),
                            //             life: 5000
                            //         });
                            //     }
                            // }

                        }
                            break;
                    }
                    return throwError(error);
                }
            ));
    }
}