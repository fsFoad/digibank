import { Component, OnInit } from '@angular/core';
import { Constants } from 'app/main/shared/constants/Constants';

@Component({
    selector: 'app-wallet-transaction',
    templateUrl: './wallet-transaction.component.html',
    styleUrls: ['./wallet-transaction.component.scss']
})
export class WalletTransactionComponent implements OnInit {
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, branchName: string,
        walletId: string, transactionType: string, transactionDes: string, docNumber: string,
        remaining: string, amount: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            branchName: '', 'walletId': '3223345',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1001',
            'remaining': ' 0', 'amount': '70000000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , branchName: '', 'walletId': '35454545',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1002',
            'remaining': '0', 'amount': '70000000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , branchName: '', 'walletId': '3587545',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1003',
            'remaining': '0', 'amount': '70000000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , branchName: '', 'walletId': '3587445',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1004',
            'remaining': ' 0', 'amount': '70000000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , branchName: '', 'walletId': '352345',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1005',
            'remaining': '0 ', 'amount': '70000000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , branchName: '', 'walletId': '343315',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1006',
            'remaining': '0 ', 'amount': '70000000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , branchName: '', 'walletId': '345323545',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1007',
            'remaining': ' 0', 'amount': '70000000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , branchName: '', 'walletId': '34234543',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1008',
            'remaining': ' 0', 'amount': '70000000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , branchName: '', 'walletId': '32145',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1009',
            'remaining': ' 0', 'amount': '70000000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , branchName: '', 'walletId': '3545445',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1010',
            'remaining': '0 ', 'amount': '70000000'
        },
    ].map((x, i) => ({ ...x, branchName: Constants.branchNames[i] }));

    constructor() {
    }

    ngOnInit(): void {
    }

}
