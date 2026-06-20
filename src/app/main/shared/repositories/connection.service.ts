import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, from} from "rxjs";
import {AppSetting} from "../services/AppSetting";
import {ApiMockObjectsService} from "../mockObjects/api-mock-objects.service";
import {DatasetService} from "../services/dataset.service";

@Injectable({
    providedIn: 'root'
})
export class ConnectionService {

    constructor(private httpClient: HttpClient, private datasetService: DatasetService) {
    }

    // مقدار جایگزین (در صورت نبودِ فایل JSON برای آن نام) از ماکِ قبلی
    private mockFallback(mockObjectName?: string): any {
        if (mockObjectName && ApiMockObjectsService[mockObjectName] !== undefined) {
            return ApiMockObjectsService[mockObjectName];
        }
        return ApiMockObjectsService.defaultApiResult;
    }

    getConnection(url: string, mockObjectName?: string, options?: any): Observable<any> {
        if (!AppSetting.IsMock) {
            return this.httpClient.get(AppSetting.API_ENDPOINT + url, options);
        } else {
            // از دیتاستِ JSON می‌خواند (با persistence)، و اگر فایل نبود از ماک قبلی
            return from(this.datasetService.loadRaw(mockObjectName, this.mockFallback(mockObjectName)));
        }
    }

    downloadConnection(url: string, mockObjectName?: string, options?: any): Observable<any> {
        if (!AppSetting.IsMock) {
            this.httpClient.get(AppSetting.API_ENDPOINT + url, options).subscribe((a => {
                window.location.href = AppSetting.API_ENDPOINT + url;
                return of('success');
            }), error => {
                if (error.status == 200) {
                    window.location.href = AppSetting.API_ENDPOINT + url;
                    return of('success');
                }
            })
        } else {
            return from(this.datasetService.loadRaw(mockObjectName, this.mockFallback(mockObjectName)));
        }
    }


    postConnection(url: string, body: any, mockObjectName?: string, options?: any): Observable<any> {
        if (!AppSetting.IsMock) {
            return this.httpClient.post(AppSetting.API_ENDPOINT + url, body, options);
        } else {
            let name = mockObjectName;
            if (name == null || name == '') {
                let splitedUrl = url.split('/');
                name = splitedUrl[splitedUrl.length - 1];
            }
            return from(this.datasetService.loadRaw(name, this.mockFallback(name)));
        }
    }

}
