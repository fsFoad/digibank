import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mat-persian-calendar',
    templateUrl: './mat-persian-calendar.component.html',
    styleUrls: ['./mat-persian-calendar.component.scss']
})
export class MatPersianCalendarComponent implements OnInit {
    dateControl: any;

    constructor() {
    }

    ngOnInit(): void {
    }

}
