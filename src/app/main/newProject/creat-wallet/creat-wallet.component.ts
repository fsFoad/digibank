import {Component, OnInit} from '@angular/core';
import {Constants} from '../../shared/constants/Constants';
import {FormBuilder} from '@angular/forms';
import {MessageService, NotifierService} from '../../shared/notifier/notifier.module';

@Component({
  selector: 'app-creat-wallet',
  templateUrl: './creat-wallet.component.html',
  styleUrls: ['./creat-wallet.component.scss'],
  providers:[MessageService]
})
export class CreatWalletComponent implements OnInit {
  listDrop: { label: string, value: number }[] = [];
  acItems = Constants.acItems;
  display = false;
  walletForm = this.fb.group({
    nationalCode: [''],
    mobile: [''],
    fullName: [''],
    charge: [''],
  });

  constructor(
    private fb: FormBuilder,

  ) {
  }

  ngOnInit(): void {
    this.listDrop = [
      {label: 'دریافت رمز پویا ', value: 1},
      {label: 'خرید پایانه فروشگاهی', value: 2},
      {label: 'خرید اینترنتی', value: 3},

    ];
  }

  search() {
    debugger
    if ((this.walletForm.controls['nationalCode'].value !== null) || (this.walletForm.controls['nationalCode'].value !== undefined)) {
     debugger
      this.walletForm.controls['mobile'].patchValue('09192265254');
      this.walletForm.controls['fullName'].setValue('حامد صبحی');
      this.walletForm.controls['charge'].setValue(' 100,000ریال');
    }
  }
}
