import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-or-download',
  templateUrl: './up-or-download.component.html',
  styleUrls: ['./up-or-download.component.scss']
})
export class UpOrDownloadComponent implements OnInit {
  fsList: {
    docType: string, operatingUnit: number, downloadDate: number,
    des: string, picture: string
  }[] = [
    {
      'docType': "قرارداد", 'operatingUnit': 67895,
      'downloadDate': 14000502, 'des': 'شرح لازم پاورقی پیوست',
      'picture': 'دارد / دانلود'
    },
    {
      'docType': 'شناسه', 'operatingUnit': null
      , 'downloadDate':null, 'des': ' ',
      'picture': 'ندارد / آپلود'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
