import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
    selector: 'app-register-bon-card',
    templateUrl: './register-bon-card.component.html',
    styleUrls: ['./register-bon-card.component.scss']
})
export class RegisterBonCardComponent implements OnInit {
    listDrop: { label: string, value: number }[] = Constants.registerBonCard_listDrop;
  acItems = Constants.acItems;
    constructor() {
    }

    ngOnInit(): void {
        this.listDrop = Constants.registerBonCard_listDrop_x;
    }
}
