import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
    selector: 'app-bill',
    templateUrl: './bill.component.html',
    styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
    upOrDownloadFlag=false;
    acItems = Constants.acItems;
    bankNameList = Constants.bankNameList;
    organList: { label: string, value: number }[] = Constants.bill_organList;
    representationList: { label: string, value: number }[] = Constants.bill_representationList;
    operationList: { label: string, value: number }[] = Constants.bill_operationList;

    // accountList: { label: string, value: number }[] = [];

    tableList: {
        bankId: number;
        bankName: string;
        accountInfo: {
            transactionNumber: number;
            accountNumber: number;
            branchName: string;
            transactionDate: string;
            yektaTransactionID: number;
            docNumber: number;
            typeOperation: string;
            amount: number;
            remaining: number;
            desTransaction: string;
            transactionInfo: {
                organNumber: number,
                transactionAgent: string,
                terminalNumber: number,
                dateAccounting: string,
                accountingHeading: string,
                desOrganTransaction: string,
            }[]
        }[]
    }[]=[];
    tableFlag = false;

    constructor() {
    }

    ngOnInit(): void {
        this.organList = Constants.bill_organList_x;
        this.representationList = Constants.bill_representationList_x;
        this.operationList = Constants.bill_operationList_x;
        // this.accountList = [
        //     {label: '-', value: 0},
        //     {label: 'سپرده قرض الحسنه 10000122344', value: 1},
        //     {label: 'سپرده کوتاه مدت 2000099998888', value: 2},
        //
        // ];

        this.tableList =  Constants.bill_tableList;


    }
    onUpOrDownload(upBill){
        this.upOrDownloadFlag = true;
    }

}
