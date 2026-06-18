import {Injectable, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class TranslateConstantsService {
    notifiSuccess = '';
    licenseInfoList = [];
    customerTypes = [];
    citizenshipTypes=[];
    genderTypes=[];
    countryList=[];
    provinceList=[];
    cityList=[];
    residenceTypes=[];
    howResidence=[];
    terminalTypesList=[];
    segmentTypeList=[];
    purchaseTypeList=[];
    chargeTypeList=[];
    statusList=[];
    organizationList=[];
    priorityList=[];
    currencyList=[];




    constructor(public translateService: TranslateService) {
        setTimeout(() => {
            this.notifiSuccess = this.translateService.instant('label.http.status.200');
            this.customerTypes = [
                {name: this.translateService.instant('real'), code: '1'},
                {name: this.translateService.instant('legal'), code: '2'},

            ];
            this.licenseInfoList = [
                {'name': '-', 'code': null},
                {'name': this.translateService.instant('business.license'), 'code': 1},
                {'name': this.translateService.instant('establishment.permit'), 'code': 2},
                {'name': this.translateService.instant('educational.license'), 'code': 3},
                {'name': this.translateService.instant('established.license'), 'code': 4},
                {'name': this.translateService.instant('licensing.packaging.distribution.production'), 'code': 5},
            ];
            this.citizenshipTypes = [
                {name: this.translateService.instant('iranian'), code: '1'},
                {name: this.translateService.instant('non.iranian'), code: '2'},
            ];
            this.genderTypes = [
                {name: '-', code: null},
                {name: this.translateService.instant('man'), code: '1'},
                {name: this.translateService.instant('female'), code: '2'},
            ];
        this.countryList = [
                {name: '-', code: null},
                {name: 'ایران', code: '1'},
                // {name: 'انگلیس', code: '2'},
                // {name: 'عربستان', code: '3'},
            ];
        this.provinceList = [
                {name: '-', code: null},
                {name: 'تهران', code: '1', countryCode: '1'},
                {name: 'اصفهان', code:'2', countryCode: '1'},
                {name: 'فارس', code: '3', countryCode: '1'},
                {name: 'خراسان رضوی', code: '4', countryCode: '1'},
                {name: 'قم', code: '5', countryCode: '1'},
                {name: 'کرمان', code: '6', countryCode: '1'},
            ];
        this.cityList = [
                {name: '-', code: null},
                {name: 'تهران', code: '1', provinceCode: '1'},
                {name: 'قم', code: '2', provinceCode: '5'},
                {name: 'اصفهان', code: '3', provinceCode: '2'},
                {name: 'شیراز', code: '4', provinceCode: '3'},
                {name: 'مشهد', code: '5', provinceCode: '4'},
                {name: 'کرمان', code: '6' , provinceCode: '6'},
                {name: 'سیرجان', code: '7', provinceCode: '6'},
                {name: 'رفسنجان', code: '8', provinceCode: '6'},
                {name: 'جیرفت', code: '9', provinceCode: '6'},
                {name: 'بم', code: '10', provinceCode: '6'},
            ];
            this.residenceTypes = [
                {name: '-', code: null},
                {name: this.translateService.instant('resident'), code: '1'},
                {name: this.translateService.instant('non.resident'), code: '2'},
            ];
            this.howResidence = [
                {name: '-', code: null},
                {name: this.translateService.instant('always'), code: '1'},
                {name: this.translateService.instant('temporary'), code: '2'},
            ];
            this.terminalTypesList = [
                {code: null, name: '-'},
                {code: '1', name: this.translateService.instant('sales.terminal.connected.telephone.line')},
                {code: '2', name: this.translateService.instant('terminal.connected.network.line')},
                {code: '3', name: this.translateService.instant('terminal.connected.cash.register')},
                {code: '4', name: this.translateService.instant('mobile.sales.terminal')},
                {code: '5', name: this.translateService.instant('online.payment.gateway')},
            ];
            this.segmentTypeList = [
                {code: null, name: '-'},
                {code: 1, name: this.translateService.instant('cash')},
                {code: 2, name: this.translateService.instant('facilities')},
                {code: 3, name: this.translateService.instant('credit')},
            ];
            this.purchaseTypeList = [
                {code: null, name: '-'},
                {code: 1, name: this.translateService.instant('buy.only.segment')},
                {code: 2, name: this.translateService.instant('combined.shopping')}
            ];
            this.chargeTypeList = [
                {code: null, name: '-'},
                {code: 1, name: this.translateService.instant('incremental.charge')},
                {code: 2, name: this.translateService.instant('constant.charge')}
            ];
            this.statusList = [
                {code: null, name: '-'},
                {code: 1, name: this.translateService.instant('active')},
                {code: 2, name: this.translateService.instant('inactive')}
            ];
            this.currencyList = [
                {code: null, name: '-'},
                {code: this.translateService.instant('irr'), name: this.translateService.instant('irr')}
            ];
            this.priorityList = [
                {code: null, name: '-'},
                {code: 1, name: this.translateService.instant('first.priority')},
                {code: 2, name: this.translateService.instant('second.priority')},
                {code: 3, name: this.translateService.instant('third.priority')},
                {code: 4, name: this.translateService.instant('fourth.priority')},
                {code: 5, name: this.translateService.instant('fifth.priority')},
                {code: 6, name: this.translateService.instant('اولویت ششم')},
                {code: 7, name: this.translateService.instant('اولویت هفتم')},
                {code: 8, name: this.translateService.instant('اولویت هشتم')},
                {code: 9, name: this.translateService.instant('اولویت نهم')},
                {code: 10, name: this.translateService.instant('اولویت دهم')},
            ];
            this.organizationList = [
                {code: null, name: '-'},
                // {code: 1, name: this.translateService.instant('resalat.bank')},
                {code: 2, name: this.translateService.instant('tavanir.organization')},
                {code: 3, name: this.translateService.instant('ministry.health.medical.education')},
                {code: 4, name: this.translateService.instant('ministry.industry.mine.trade')},
            ];
        }, 150);

    }
}
