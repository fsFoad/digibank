import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-yekta-list',
    templateUrl: './yekta-list.component.html',
    styleUrls: ['./yekta-list.component.scss']
})
export class YektaListComponent implements OnInit {
    listDrop: { label: string, value: number }[] = [];
    tableFlag = false;
    fsList: {
        accountNumber: number, history: string, creatingUnit: string,
        yektaCode: string, dateDue: string, creatorUser: string, algorithmType: string,
        amounts: string, baseCode: string, amount: string
    }[] = [
        {
            'accountNumber': 1574655249, 'history': '1400/05/01',
            'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '423523452', 'creatorUser': 'علی محمدی', 'algorithmType': '   ',
            'amounts': ' 6785656566', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 7541589521, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '23423443', 'creatorUser': 'سینا کریمی', 'algorithmType': '   ',
            'amounts': ' 356676345', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 7548621548, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '4542234', 'creatorUser': 'سامان کاشانی', 'algorithmType': '   ',
            'amounts': ' 786745656', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 1548254962, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '456456345', 'creatorUser': 'عماد همتی', 'algorithmType': '   ',
            'amounts': '567678565', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 8465215749, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '34534624', 'creatorUser': 'فرید ترابی', 'algorithmType': '   ',
            'amounts': '5645765', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 3256157895, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '34556665', 'creatorUser': 'کامیار کاظمی', 'algorithmType': '   ',
            'amounts': '789677565', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 7416581213, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '35656735434', 'creatorUser': 'عرفان حشمتی', 'algorithmType': '   ',
            'amounts': '3545643467', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 8742154565, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '3453456567', 'creatorUser': 'رستم حبیبی', 'algorithmType': '   ',
            'amounts': ' 4323633', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 1525844572, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '34534535676', 'creatorUser': 'حبیب حسینی', 'algorithmType': '   ',
            'amounts': '346457658', 'baseCode': '5666', 'amount': '10000'
        },
        {
            'accountNumber': 8754788621, 'history': '1400/05/01'
            , 'creatingUnit': '    ', 'yektaCode': '10000022',
            'dateDue': '5645675656', 'creatorUser': 'کریم حسنی', 'algorithmType': '   ',
            'amounts': ' 24365768', 'baseCode': '5666', 'amount': '10000'
        },
    ];

    constructor() {
        this.listDrop = [
            {label: 'الگوریتم نوع اول ', value: 1},
            {label: 'الگوریتم نوع دوم', value: 2},
            {label: 'الگوریتم نوع سوم', value: 3},

        ];
    }

    ngOnInit(): void {
    }

}
