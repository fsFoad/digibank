import {Injectable} from '@angular/core';
import {Constants} from '../constants/Constants';
import {verifyCardNumber} from "persian-tools2";


import moment from "moment-jalaali";
@Injectable({
    providedIn: 'root'
})
export class CommonValidationsService {

    ibanNumber2: bigint;

    constructor() {
    }
    validateNationalCodeLegal(code){
            let L=code.length;
            if(L<11 || parseInt(code,10)==0)
                return false;
            if(parseInt(code.substr(3,6),10)==0)
                return false;
        let c=parseInt(code.substr(10,1),10);
        let d=parseInt(code.substr(9,1),10)+2;
        let z=[29,27,23,19,17];
        let s=0;
            for(let i=0;i<10;i++)
                s+=((d+parseInt(code.substr(i,1),10))*z[i%5]);
            s=s%11;
            if(s==10)
                s=0;
            return (c==s);
    }
    validateNationalCode(nationalCode: string): boolean {
        let length = nationalCode.length;
        if (length < 8 || parseInt(nationalCode, 10) == 0) {
            return false;
        }
        nationalCode = ('0000' + nationalCode).substr(length + 4 - 10);
        if (parseInt(nationalCode.substr(3, 6), 10) == 0) {
            return false;
        }
        let c = parseInt(nationalCode.substr(9, 1), 10);
        let s = 0;
        for (var i = 0; i < 9; i++) {
            s += parseInt(nationalCode.substr(i, 1), 10) * (10 - i);
        }
        s = s % 11;
        return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
    }

    validateMobile(mobile: string): boolean {
        return !(mobile.length != 11 || mobile.charAt(0) != '0' || mobile.charAt(1) != '9');
    }

    validatePhone(mobile: string): boolean {
        return !(mobile.length != 11 || mobile.charAt(0) != '0');
    }

    validateAccountNumber(accountNo: string): boolean {
        return (accountNo.length === 13) && (!isNaN(Number(accountNo.substring(0, 3)))) && (isNaN(Number(accountNo.charAt(3)))) && (!isNaN(Number(accountNo.substring(5, 11))))
            && (isNaN(Number(accountNo.charAt(11)))) && ((!isNaN(Number(accountNo.charAt(12)))));
    }

    validateIbanInfo(ibanNumber: string): boolean
    {
        try {
            this.ibanNumber2 = BigInt(ibanNumber.substr(2, 25));
        }catch (e) {
            return true;
        }
        return (!(ibanNumber.length === 26) || !(ibanNumber.charAt(0) === 'I') ||
            !(ibanNumber.charAt(1) === 'R'));
    }

    valiateCardNo(cardNumber: string): boolean {
        return verifyCardNumber(cardNumber);
    }

    validatePostalCode(postalCode: string): boolean {
        // let postalCodePattern = new RegExp('\\b(?!(\\d)\\1{3})[13-9]{4}[1346-9][013-9]{5}\\b$');
        let postalCodePattern = new RegExp(Constants.postalPattern);
        return postalCodePattern.test(postalCode);
    }

    stringNotNullChecker(input: string): boolean {
        return !(input === null || input === undefined || input === '');
    }

    numberNotNullChecker(input: number): boolean {
        return !(input === null || input === undefined || input === 0);
    }

    listNotNullChecker(input: any[]): boolean {
        return !(input === null || input === undefined || input.length < 1);
    }
    maximumDateChecker(input: number): boolean{
        const moment1 = moment();
        return!(input<=moment1.format('jYYYYjMMjDD'))
    }
    searchDateMaximumChecker(input: number): boolean{
        const moment1 = moment();
        return!(input<=moment1.format('jYYYYjMMjDD'))
    }
}
