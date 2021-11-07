import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from "primeng/api";
import { SatnaRow } from '../card-board-satna/card-board-satna.component';

interface SatnaApprover {
  id: number;
  fullName: string;
  verificationType: string;
  verificationStatus: string;
  history: number;
  des: string;
}

interface SatnaApproverRelation {
  satnaId: number;
  approverId: number;
}

@Component({
  selector: 'app-specifications-request-satna',
  templateUrl: './specifications-request-satna.component.html',
  styleUrls: ['./specifications-request-satna.component.scss'],
  providers: [ConfirmationService]
})
export class SpecificationsRequestSatnaComponent implements OnInit {
  allApprovers = createSampleSatnaApprovers()
  satnaToApproverRelations = createSampleSatnaToApproverRelations()
  approversList: SatnaApprover[];
  @Output() close = new EventEmitter<string>();

  _satnaRow: SatnaRow | null = null;
  @Input() get satnaRow(): SatnaRow | null {
    return this._satnaRow;
  };
  set satnaRow(value: SatnaRow) {
    this._satnaRow = value;
    this.approversList = this.satnaToApproverRelations
      .filter(x => x.satnaId == value.id)
      .map(x => this.allApprovers.find(a => a.id == x.approverId))
  }

  constructor(
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit('close');
  }
  
  confirm() {
    const message = "مطابق ابلاغیه بانک مرکزی نحوه محاسبه کارمزد ساتنا 0.02 درصد حواله با حداقل کارمزد 30،000 ریال و حداکثر کارمزد 250،000 ریال می باشد که با تایید نهایی از حساب مبدا برداشت خواهد شد.";
    this.confirmationService.confirm({
      message,
      accept: () => this.onClose()
    });
  }
}


function createSampleSatnaApprovers(): SatnaApprover[] {
  return [
    {
      id: 1,
      fullName: 'حسین بهجتی',
      verificationType: 'اختیاری',
      verificationStatus: 'بررسی نشده',
      history: null,
      des: '',
    },
    {
      id: 2,
      fullName: 'ایرج خداپرست',
      verificationType: 'اختیاری',
      verificationStatus: 'بررسی نشده',
      history: null,
      des: '',
    },
    {
      id: 3,
      fullName: 'سیاوش راسخی',
      verificationType: 'اختیاری',
      verificationStatus: 'بررسی نشده',
      history: null,
      des: '',
    }
  ];
}

function createSampleSatnaToApproverRelations(): SatnaApproverRelation[] {
  return [
    { satnaId: 1, approverId: 1 },
    { satnaId: 2, approverId: 2 },
    { satnaId: 3, approverId: 3 },
  ]
}