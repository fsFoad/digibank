import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';

@Component({
    selector: 'app-register-ghabz',
    templateUrl: './register-ghabz.component.html',
    styleUrls: ['./register-ghabz.component.scss']
})
export class RegisterGhabzComponent implements OnInit {
  acItems = Constants.acItems;
    constructor() {
    }

    ngOnInit(): void {
    }

}
