import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-paya-tak-transfer',
    templateUrl: './paya-tak-transfer.component.html',
    styleUrls: ['./paya-tak-transfer.component.scss']
})
export class PayaTakTransferComponent implements OnInit {
    ibon = 'IR';

    constructor(private router: Router) { }

    ngOnInit(): void {
    }


  goHome(): void {
    this.router.navigate(['/']);
  }
}
