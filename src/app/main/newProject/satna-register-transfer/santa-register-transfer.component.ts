import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-santa-register-transfer',
  templateUrl: './santa-register-transfer.component.html',
  styleUrls: ['./santa-register-transfer.component.scss']
})
export class SantaRegisterTransferComponent implements OnInit {
    ibon="IR"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goHome(): void {
    this.router.navigate(['/']);
  }
}
