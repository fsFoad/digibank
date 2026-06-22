import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-paya-transfer',
    templateUrl: './register-paya-transfer.component.html',
    styleUrls: ['./register-paya-transfer.component.scss']
})
export class RegisterPayaTransferComponent implements OnInit {
    ibon = 'IR';

    constructor(private router: Router) { }

    ngOnInit(): void {
    }


  goHome(): void {
    this.router.navigate(['/']);
  }
}
