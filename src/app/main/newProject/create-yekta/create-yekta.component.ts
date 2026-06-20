import {Component, OnInit} from '@angular/core';
import { Constants } from '../../shared/constants/Constants';

@Component({
    selector: 'app-create-yekta',
    templateUrl: './create-yekta.component.html',
    styleUrls: ['./create-yekta.component.scss']
})
export class CreateYektaComponent implements OnInit {
    listDrop: { label: string, value: number }[] = Constants.createYekta_listDrop;
    listDrop2: { label: string, value: number }[] = Constants.createYekta_listDrop2;

    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = Constants.createYekta_listDrop_x;
        this.listDrop2 = Constants.createYekta_listDrop2_x;
    }
}
