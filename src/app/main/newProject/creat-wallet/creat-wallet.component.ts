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
  listDrop: { label: string, value: number }[] = Constants.creatWallet_listDrop;
  acItems = Constants.acItems;
  display = false;
  displayValidation = false;
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
    this.walletForm.controls['mobile'].disable();
    this.walletForm.controls['fullName'].disable();
    this.listDrop = Constants.creatWallet_listDrop_x;
  }

  search() {
if (this.walletForm.controls['nationalCode'].value.length!==10){
  this.displayValidation = true;
}else if ((this.walletForm.controls['nationalCode'].value !== null) ||
  (this.walletForm.controls['nationalCode'].value !== undefined))
   {
      this.walletForm.controls['mobile'].patchValue('09192265254');
      this.walletForm.controls['fullName'].setValue('حامد صبحی');
      // this.walletForm.controls['charge'].setValue(' 100,000ریال');
    }

  }
}
