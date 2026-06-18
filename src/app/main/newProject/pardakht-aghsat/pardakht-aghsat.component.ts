import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import moment from 'moment-jalaali';
@Component({
  selector: 'app-pardakht-aghsat',
  templateUrl: './pardakht-aghsat.component.html',
  styleUrls: ['./pardakht-aghsat.component.scss'],
  providers: [ConfirmationService]
})
export class PardakhtAghsatComponent implements OnInit {
  detailsFlag = false;
  display = false;
  history;
  time;
  constructor(
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
    const moment1 = moment();
    this.history=Number(moment1.format('jYYYYjMMjDD'));

      var temp = new Date();
       this.time = temp.getTime();
  }

  showModalDialog() {
    this.display = true;
  }

  confirm() {
    this.confirmationService.confirm({
      message: "مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد حواله پایا 0.01 درصد حواله با حداقل کارمزد2،000 ریال و حداکثر کارمزد 25،000 ریال می باشد که با تایید نهایی از حساب مبدا برداشت خواهد شد."
      ,
      accept: () => {
        this.detailsFlag = false;
        //Actual logic to perform a confirmation
      }
    });
  }
}
