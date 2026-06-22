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
        accountNumber: string, history: string, branchName: string,
        walletId: string, transactionType: string, transactionDes: string, docNumber: string,
        remaining: string, amount: string
    }[] = [
        {
            'accountNumber': '240-1000000589-25', 'history': '1404/03/10',
            branchName: '', 'walletId': '32233345',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1001',
            'remaining': ' 0', 'amount': '20000000000'
        },
        {
            'accountNumber': '340-1000000145-65', 'history': '1404/04/12'
            , branchName: '', 'walletId': '35454545',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1002',
            'remaining': '0', 'amount': '50000000000'
        },
        {
            'accountNumber': '340-1000000189-26', 'history': '1404/05/30'
            , branchName: '', 'walletId': '35747545',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1003',
            'remaining': '0', 'amount': '65000000000'
        },
        {
            'accountNumber': '440-1006580523-01', 'history': '1404/07/28'
            , branchName: '', 'walletId': '35874145',
            'transactionType': '', 'transactionDes': ' ', 'docNumber': '1004',
            'remaining': ' 0', 'amount': '89000000000'
        },
        // {
        //     'accountNumber': 8465215749, 'history': '1400/05/01'
        //     , branchName: '', 'walletId': '352345',
        //     'transactionType': '', 'transactionDes': ' ', 'docNumber': '1005',
        //     'remaining': '0 ', 'amount': '70000000'
        // },
        // {
        //     'accountNumber': 3256157895, 'history': '1400/05/01'
        //     , branchName: '', 'walletId': '343315',
        //     'transactionType': '', 'transactionDes': ' ', 'docNumber': '1006',
        //     'remaining': '0 ', 'amount': '70000000'
        // },
        // {
        //     'accountNumber': 7416581213, 'history': '1400/05/01'
        //     , branchName: '', 'walletId': '345323545',
        //     'transactionType': '', 'transactionDes': ' ', 'docNumber': '1007',
        //     'remaining': ' 0', 'amount': '70000000'
        // },
        // {
        //     'accountNumber': 8742154565, 'history': '1400/05/01'
        //     , branchName: '', 'walletId': '34234543',
        //     'transactionType': '', 'transactionDes': ' ', 'docNumber': '1008',
        //     'remaining': ' 0', 'amount': '70000000'
        // },
        // {
        //     'accountNumber': 1525844572, 'history': '1400/05/01'
        //     , branchName: '', 'walletId': '32145',
        //     'transactionType': '', 'transactionDes': ' ', 'docNumber': '1009',
        //     'remaining': ' 0', 'amount': '70000000'
        // },
        // {
        //     'accountNumber': 8754788621, 'history': '1400/05/01'
        //     , branchName: '', 'walletId': '3545445',
        //     'transactionType': '', 'transactionDes': ' ', 'docNumber': '1010',
        //     'remaining': '0 ', 'amount': '70000000'
        // },
    ].map((x, i) => ({ ...x, branchName: Constants.branchNames[i] }));

    constructor() {
    }

    ngOnInit(): void {
    }

}
