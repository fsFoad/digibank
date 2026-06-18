import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AppSetting} from "../services/AppSetting";
import {ApiMockObjectsService} from "../mockObjects/api-mock-objects.service";

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    constructor(private httpClient: HttpClient) {
    }

    getConnection(url: string, mockObjectName?: string, options?: any): Observable<any> {
        if (!AppSetting.IsMock) {
            return this.httpClient.get(AppSetting.API_ENDPOINT + url, options);
        } else {
            if (ApiMockObjectsService[mockObjectName]) {
                return of(ApiMockObjectsService[mockObjectName]);
            } else {
                return of(ApiMockObjectsService.defaultApiResult);
            }
        }
    }

    downloadConnection(url: string, mockObjectName?: string, options?: any): Observable<any> {
        if (!AppSetting.IsMock) {
            this.httpClient.get(AppSetting.API_ENDPOINT + url, options).subscribe((a=>{
                window.location.href = AppSetting.API_ENDPOINT+url;
                return of('success');
            }),error => {
                if (error.status == 200){
                    window.location.href = AppSetting.API_ENDPOINT+url;
                    return of('success');
                }
            })
        } else {
            if (ApiMockObjectsService[mockObjectName]) {
                return of(ApiMockObjectsService[mockObjectName]);
            } else {
                return of(ApiMockObjectsService.defaultApiResult);
            }
        }
    }


    postConnection(url: string, body: any, mockObjectName?: string, options?: any): Observable<any> {
        if (!AppSetting.IsMock) {
            return this.httpClient.post(AppSetting.API_ENDPOINT + url, body, options);
        } else {
            if (mockObjectName == null || mockObjectName == '') {
                let splitedUrl = url.split('/');
                let mockObjectName = splitedUrl[splitedUrl.length - 1];
            }
            if (ApiMockObjectsService[mockObjectName]) {
                return of(ApiMockObjectsService[mockObjectName]);
            } else {
                return of(ApiMockObjectsService.defaultApiResult);
            }
        }
    }

}
